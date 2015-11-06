import java.util.Arrays;

/**
 * Created by nathansass on 11/5/15.
 *
 * Challenge from
 * https://www.codeeval.com/open_challenges/104/
 */

public class WordToDigit {

    static final String[] WORD_NUMBERS = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

    private static String wordToDigit(String word) {
        String[] wordAsArray = sanitizeWord(word);
        String wordAsDigits = "";
        for (String wordAsNum : wordAsArray) {
            int indexOfWord = Arrays.asList(WORD_NUMBERS).indexOf(wordAsNum);
            wordAsDigits += indexOfWord;

        }

        return wordAsDigits;
    }

    private static String[] sanitizeWord(String word) {
        String[] splitWord = word.split(";");
        return splitWord;
    }


    public static void main(String[] args) {
        String word = "zero;two;five;seven;eight;four";
        String word2 = "three;seven;eight;nine;two";
        System.out.println("First word  : " + wordToDigit(word) +
                "\nSecond word : " + wordToDigit(word2));
    }
}