import java.util.Arrays;

/**
 * Created by nathansass on 10/27/15.
 */
public class PenultimateWord {
    public static String printPenultimate(String phrase) {
        String[] stringArr = phrase.split("\\s+");
        return stringArr[stringArr.length - 2];
    }

    public static void printPenultimate(String[] phrases) {
        System.out.println("this where you pint out strings");
        for(String word : phrases) System.out.println(printPenultimate(word));
    }


    public static void main(String[] args) {
        System.out.println("Reversed Strings:");
        String phrase1 = "Print the second to last word.";
        String printMe = printPenultimate(phrase1);
        System.out.println(printMe);

        String[] arrOfPhrases = {"Check me out", "Hello world, it's a great day.", "another word to parse"};
        printPenultimate(arrOfPhrases);
    }


}


