/*
 * Write a method to replace all spaces in a string
 * with %20. You may assume that the string
 * has sufficient space at the end to hold the additional characters, and that you are given the "true"
 * length of the string.
 * EXAMPLE
 * Input: "Mr John Smith ", 13
 * Output: "Mr%20John%20Smith"
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
  char *pInput = "Mr John Smith    ";
  int inputLength = 13;

  char *pNewSpace = "%20";
  char *pStringWorkspace = malloc(sizeof(char) * strlen(pInput));
  int trailingSpaces = strlen(pInput) - inputLength;
  int j = strlen(pStringWorkspace);
  char *pFinalString;

  int counter = inputLength;

  if (pInput[inputLength] == ' ')
    inputLength--;

  for (counter = inputLength; counter >= 0; counter--) {
    if (pInput[counter] == ' ') {
      for (int n = strlen(pNewSpace) - 1; n >= 0; n--) {
        j = j - 1;
        pStringWorkspace[j] = pNewSpace[n];
      }
      counter--;
    }
    j--;
    pStringWorkspace[j] = pInput[counter];
  }
  pFinalString = &pStringWorkspace[strlen(pStringWorkspace) - strlen(pInput)];
  printf("%s", pFinalString);
  getc(stdin);
}
