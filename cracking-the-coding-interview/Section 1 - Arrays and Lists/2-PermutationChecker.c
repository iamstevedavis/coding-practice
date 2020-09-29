/*
 * Given two strings, write a method to decide
 * if one string is a permutation of the other.
 */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void) {
  char* pStringOne = "hello";
  char* pStringTwo = "asdfd";
  int counter, stringTotal1, stringTotal2 = 0;

  if(strlen(pStringOne) != strlen(pStringTwo)) {
    printf("%s \n", "Not a Permutation");
    getchar();
    exit(0);
  }

  for (counter = 0; counter < strlen(pStringOne); counter++) {
    stringTotal1 += (int)pStringOne[counter];
    stringTotal2 += (int)pStringTwo[counter];
  }

  if(stringTotal1 == stringTotal2) {
    printf("%s \n", "Permutation");
  } else {
    printf("%s \n", "Not a Permutation");
  }

  getchar();
}
