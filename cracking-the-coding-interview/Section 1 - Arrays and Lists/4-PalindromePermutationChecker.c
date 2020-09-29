/*
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat", "atco cta", etc.)
 * Hints: #106, #121, #134, #136
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>


void delete_char(char *str, int i);


int main(void) {
  char input[] = "aaaaa aaaaa ab";
  int foundLetter = 0;
  char currentLetter = '\0';
  int counter, counter2 = 0;


  for (counter = 0; counter < strlen(input); counter++) {
    if(input[counter] == ' ') {
      delete_char(input, counter);
      counter--;
    }
  }


  while (1) {
    counter = 0;
    currentLetter = tolower(input[counter]);
    for (counter2 = (counter + 1); counter2 < strlen(input); counter2++) {
      if (tolower(input[counter2]) == tolower(currentLetter)) {
        foundLetter = 1;
        delete_char(input, counter);
        counter2--;
        delete_char(input, counter2);
        break;
      }
    }
    if (foundLetter == 0 && strlen(input) <= 1) {
      printf("%s", "True");
      break;
    } else if (foundLetter == 0 && strlen(input) > 1) {
      printf("%s", "False");
      break;
    } else if (foundLetter == 1) {
      if (strlen(input) == 0) {
        printf("%s", "True");
        break;
      }
      foundLetter = 0;
    }
  }


  getc(stdin);
  return 0;
}


void delete_char(char *str, int i) {
  int len = strlen(str);


  for (; i < len - 1; i++)
  {
    str[i] = str[i + 1];
  }


  str[i] = '\0';
}
