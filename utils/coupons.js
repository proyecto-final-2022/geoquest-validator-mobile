import { JSHash, CONSTANTS } from "react-native-hash";
import Config from "../config.json";
import _ from "underscore";
import axios from "axios";


export async function couponHash(coupon) {
  const couponTextLine = `${coupon.id}${coupon.userId}${coupon.clientId}${coupon.description}${coupon.used}`.toLowerCase();
  return await JSHash(couponTextLine, CONSTANTS.HashAlgorithms.sha256);
}


function isJsonString(string) {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
}

function isValidCoupon(coupon) {
  const attributes = [  // Properties needed for validation.
    "id",
    "clientId",
    "userId",
    "description",
    "used",
  ];
  return _.all(attributes, attr => _.has(coupon, attr));
}

function isValidQRData(data) {
  if (!isJsonString(data)){
    return false;
  }

  const coupon = JSON.parse(data);
  return isValidCoupon(coupon);
}

export async function validate(scannedData) {
  if (!isValidQRData(scannedData))
    return {validity: false, coupon: undefined};

  const coupon = JSON.parse(scannedData);
  const hash = await couponHash(coupon);

  const url = Config.validatorUrl + `/coupons/${coupon.id}/${hash}`;
  try {
    const res = await axios.get(url, { timeout: Config.requestTimeout });
    return {validity: res.data.isValid, coupon};
  } catch (error) {
    if (error?.response?.status === 404) {
      return {validity: false, coupon};
    }

    throw error;
  }
}


export async function notifyUsage(coupon) {
  const hash = await couponHash(coupon);
  const url = Config.validatorUrl + `/coupons/${coupon.id}/${hash}`;
  return await axios.patch(url, { timeout: Config.requestTimeout });
}
