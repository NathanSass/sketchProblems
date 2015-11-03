import jdk.internal.org.objectweb.asm.tree.analysis.Value;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

/**
 * Created by nathansass on 10/27/15.
 */
/*
find the number of each char in the string
organize the count of unique chars highest to lowest
start my multiplying by 26, then decrease by 1

    https://www.codeeval.com/open_challenges/83/
*/
public class BeautifulStrings {
    public static HashMap<String, Integer> charCountMap;// = new HashMap<String, Integer>();

    public static HashMap <String, Integer> countCharOccurences (String str) {
        str = str.toLowerCase();
        charCountMap = new HashMap<>();
        for (int i = 0; i <= str.length() - 1; i++) {
            String letter = str.charAt(i) +"";

            if (charCountMap.containsKey(letter)) {
                int oldVal = charCountMap.get(letter);
                charCountMap.put(letter, oldVal + 1);
            } else {
                charCountMap.put(letter, 1);
            }
        }
        return charCountMap;
    }


    public static void main(String[] args) {
        String string1 = "ABbCcc";
        HashMap <String, Integer> charHashMap = countCharOccurences(string1);

        ArrayList <Integer> charCount  = new ArrayList<>(charHashMap.values());
        Collections.sort(charCount, Collections.reverseOrder());

        int beautyValue = 0;
        int currentBeauty = 26;
        for (int i = 0; i < charCount.size(); i++) {
            int charInstances = (int) charCount.get(i);
            int letterBeautyVal = charInstances * currentBeauty;
            beautyValue += letterBeautyVal;
            currentBeauty -= 1;
        }
        System.out.println(beautyValue);
    }
}
