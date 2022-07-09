1. Der Spieler gibt die Zahlen ein
2. Der Spieler betätigt die "Play"-Taste
    - beträgt der Kontostand weniger als der Spielpreis
        - ja: Spiel wird abgebrochen
        - nein: Spiel wird durchgeführt
3. Die Zahlen werden eingelesen
    - Die Eingabe wird anhand der Kommazeichen aufgeteilt
    - Die Eingabeelemente werden in Zahlen umgewandelt
    - Für jedes Eingabeelement:
        - Nur Zahlen werden in eine Liste übernommen
          sofern sie zwischen 1 und 45 (inkl.) liegen
        - Nur Zahlen werden in eine Liste übernommen
          wenn sie nicht schon in der Liste drin sind
    - Enthält die Liste sechs Elemente, geht das Spiel los
    - Andernfalls wird eine Fehlermeldung angezeigt
4. Die Lottozahlen werden gezogen
    - Solange noch nicht sechs Zahlen gezogen worden sind
        - Eine Zufallszahl zwischen 1 und 45 wird ermittelt
        - Die Zufallszahl wird einer Liste hinzugefügt
            - sofern diese Zahl noch nicht gezogen worden ist
            - ansonsten wird eine neue gezogen
5. Die Anzahl Übereinstummungen wird ermittelt
    - ein Zähler wird mit 0 initialisiert
    - iterieren über die Zahlen des Benutzers
        - kommt die Zahl in den Lottozahlen vor?
            - ja: ein Zähler wird erhöht
            - nein: nichts wird gemacht
    - der Zähler beinhaltet die Übereinstimmungen
6. Je nach Übereinstimmung wird ein Gewinn ermittelt
    - gibt es Übereinstimmungen?
        - nein: keine Gutschrift (abgeschlosen)
    - eine Tabelle mit Anzahl Übereinstimmungen und Gewinnen ist gegeben
    - mit der Anzahl Übereinstimmungen wird in der Tabelle nachgeschlagen
        - kein Eintrag: Gewinn beträgt 0
        - Eintrag gefunden: Gewinn ist der Wert des Eintrags
7. Der Gewinn wird dem Spieler gutgeschrieben
    - Aktuellen Kontostand aus HTML auslesen
    - Kontostand um Gewinn erhöhen
    - neuen Kontostand im HTML anzeigen