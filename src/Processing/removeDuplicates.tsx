//function to remove Dumplicates for an array
export default function removeDuplicates(arr: any[]): any[] {
  return [...new Set(arr)];
}
