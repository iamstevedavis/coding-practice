function BinarySearch (arrayToSearch, x) {
  let low = 0;
  let high = arrayToSearch.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arrayToSearch[mid] < x) {
      low = mid + 1;
    } else if (arrayToSearch[mid] > x) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
