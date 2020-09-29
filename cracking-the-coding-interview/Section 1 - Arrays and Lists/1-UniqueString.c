/*
 * Implement an algorithm to determine if a
 * string has all unique characters.
 */

#include <stdio.h>
#include <string.h>

int main(void) {
  int duplicateFound = 0;
  int lastPlace = 0;
  int i, j = 0;
  char* pTheString = "hello";
  char currentChar;

  for (i = 0; i < strlen(pTheString); i++) {
    currentChar = pTheString[i];
    lastPlace++;
    for (j = lastPlace; j < strlen(pTheString); j++) {
      if (pTheString[j] == currentChar) {
        duplicateFound = 1;
        break;
      }
    }
    if (duplicateFound == 1) {
      printf("%s %c \n", "Found Duplicate", currentChar);
      break;
    }
  }

  getchar();
}
