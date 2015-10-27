import java.util.Arrays;

/**
 * Created by nathansass on 10/27/15.
 */
public class PenultimateWord {
    public static String printPenultimate(String phrase) {
        System.out.println("PRINT THIS STTRING");
        String[] stringArr = phrase.split("\\s+");
        return stringArr[stringArr.length - 2];
    }


    public static void main(String[] args) {
        System.out.println("Reversed Strings:");
        String phrase1 = "Print the second to last word.";
        String printMe = printPenultimate(phrase1);
        System.out.println(printMe);

    }
}


