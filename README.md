# Lottery

Bei diesem Übungsprojekt handelt es sich um ein kleines Lotteriespiel. Hiermit
sollen Sie nicht nur die Grundlagen von JavaScript lernen, sondern auch
herausfinden, warum es sich nicht lohnt Lotto zu spielen.

Das Projekt besteht im Wesentlichen aus drei Dateien:

- `lottery.html`: Die HTML-Seite, auf welcher die verschiedenen Seitenelemente
  angeordnet sind. (HTML sollten Sie bereits kennen.)
- `lottery.css`: Das Stylesheet, das der Seite ihr optisches Erscheinungsbild
  verleigt. (Auch CSS sollten Sie bereits kennen.)
- `lottery.js`: Die JavaScript-Datei, welche die eigentliche Programmlogik
  enthalten soll. (Wie man das macht, lernen Sie in diesem Modul.)

Die fertige Seite soll dann beim Spielen folgendermassen aussehen:

![Das fertige Lotteriespiel](screenshots/lottery.png)

## Aufgabe 1: HTML und CSS betrachten

Schauen Sie sich die beiden Dateien `lottery.html` und `lottery.css` an.
Verstehen Sie alles, was darin vorkommt? **Notieren Sie sich allfällige
Fragen!**

## Aufgabe 2: Seite inspizieren

Öffnen Sie die Seite `lottery.html` in einem Web-Browser (z.B. Firefox, Chrome).
Öffnen Sie die Developer Tools. Mithilfe des _Inspectors_ können Sie nun
verschiedene Seitenelemente auswählen.

**Ermitteln Sie die `id`-Attribute der folgenden Elemente:**

- Das (leere) Eingabefeld für die Zahlen.
- Den Button mit der Aufschrift `Play`.
- Den Button mit der Aufschrift `Clear`.

Diese `id`-Attribute werden Sie beim Programmieren wieder benötigen.

## Aufgabe 3: JavaScript testen

Öffnen Sie die Datei `lottery.js` in einem Texteditor oder einer
Entwicklungsumgebung wie [Visual Studio Code](https://code.visualstudio.com/).

Die Datei ist schon soweit vorbereitet, dass nach erfolgtem Laden der Seite die
Funktion `main()` ausgeführt wird.

**Ergänzen Sie die Funktion `main()` um folgende Zeile:**

    console.log("Hello, World!");

Laden Sie nun die Datei `lottery.html` neu im Browser. Bei den Developer Tools
gibt es einen Tab namens "Console". Sie sollten hier jetzt die Meldung `Hello,
World!` zu sehen bekommen.

## Aufgabe 4: Das Eingabefeld leeren

Ein Klick auf den Button `Clear` soll den Inhalt des Eingabefelds leeren.
**Programmieren Sie diese Funktionalität.** Informationen hierzu finden Sie im
[JavaScript Tutorial](https://www.w3schools.com/js/default.asp) von
[w3schools.com](https://www.w3schools.com/):

- [DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)
- [JavaScript Forms](https://www.w3schools.com/js/js_validation.asp)
- [Event Listener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

## Aufgabe 5: Das Programm entwerfen

Die eigentliche Spiellogik läuft am, wenn Schaltfläche `Play` betätigt wird.
**Beschreiben Sie den Ablauf der Logik als Liste.** Diese kann etwa
folgendermassen aussehen:

1. Die Zahlen einlesen.
    1. Die Eingabe aus dem Feld lesen.
    2. Die Eingabe anhand der Kommas trennen.
    3. …
2. Die Lottozahlen zufällig berechnen.
    1. …
3. Die getippten Zahlen mit den gezogenen Lottozahlen vergleichen.
    1. …
4. …

Beachten Sie dabei folgende Aspekte:

- Der Spieler muss sechs Zahlen zwischen 1 und 45 eingeben; jede davon darf nur
  einmal vorkommen.
- Die Lottoziehung muss sechs _zufällige_ Zahlen zwischen 1 und 45 ergeben,
  wovon jede nur einmal vorkommen darf.
- Der Spieler hat einen Kontostand ("balance"). Für jede gespielte Runde wird
  ein Betrag abgezogen; ein allfälliger Gewinn wird gutgeschrieben. Hat der
  Spieler kein Geld mehr, kann er nicht mehr spielen.
- Die Gewinnsummen sind in der Liste oben an der Seite `lottery.html`
  aufgeführt.
- Der Spieler sollte mehrere Runden nacheinander spielen können, auch mit den
  gleichen Zahlen.

## Aufgabe `n`: _Weitere Aufgaben folgen…_

TODO
