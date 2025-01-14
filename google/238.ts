// https://leetcode.com/problems/product-of-array-except-self/

function getProduct(nums: number[]): [number, number] {
  let product: number = 1;
  let productExceptZero: number = 1;
  for (let num of nums) {
    if (num == 0) productExceptZero = product;
    else productExceptZero *= num;

    product *= num;
  }
  return [product, productExceptZero];
}
function productExceptSelf(nums: number[]): number[] {
  let [product, productExceptZero] = getProduct(nums);
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) result.push(product / nums[i]);
    else result.push(productExceptZero);
  }

  return result;
}

console.log(productExceptSelf([1, 0, 0, 4]));
