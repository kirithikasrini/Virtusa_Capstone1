import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class WordFrequencyCounter {
    public static Map<String, Integer> countWordFrequencies(String text) {
        Map<String, Integer> frequencyMap = new HashMap<>();
        if (text == null || text.trim().isEmpty()) {
            return frequencyMap;
        }
        
        String[] words = text.toLowerCase().replaceAll("[^a-zA-Z0-9\\s]", "").split("\\s+");
        for (String word : words) {
            if (!word.isEmpty()) {
                frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
            }
        }
        return frequencyMap;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter text to count word frequencies: ");
        String inputText = scanner.nextLine();
        
        Map<String, Integer> frequencies = countWordFrequencies(inputText);
        
        System.out.println("\nWord Frequencies:");
        if (frequencies.isEmpty()) {
            System.out.println("No words found in input.");
        } else {
            for (Map.Entry<String, Integer> entry : frequencies.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
        scanner.close();
    }
}
