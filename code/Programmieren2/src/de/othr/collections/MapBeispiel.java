package de.othr.collections;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class MapBeispiel {
    public static void main(String[] args) {
        Map<String, String> en_de = new HashMap<>();
        en_de.put("cat", "Katze");
        en_de.put("dog", "Hundd");
        en_de.put("dog", "Hund");

        System.out.println("Anzahl Einträge: "+en_de.size());

        en_de.remove("cat");

        System.out.println("dog heißt "+en_de.get("dog"));

        for(Entry<String, String> eintrag : en_de.entrySet()) {
            System.out.printf("%s heißt %s\n",
                    eintrag.getKey(), eintrag.getValue());
        }
    }
}
