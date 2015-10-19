/**
 * Created by nathansass on 10/19/15.
 */


public class reverseString {

    public static void main(String[] args) {
        System.out.println("Reversed Strings:");

        String[] stringsToReverse = {
            "Hello",
            "World!"
        };

        for(String s: stringsToReverse) {

            String reversedString = "";
            String[] wordArr = s.split("");
            for(int i = wordArr.length - 1; i>= 0; i-- ) {
                reversedString += wordArr[i];

            }

            System.out.printf("%s : %s \n", s, reversedString);
            System.out.println("Bye!g");
        }



    }
}
