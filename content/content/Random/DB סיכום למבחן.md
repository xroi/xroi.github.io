---
cssclasses:
  - rtl-class
---

## דיאגרמות ER
#### אלגוריתמים
- מציאת חסם למספר ישויות בקבוצת קשרים. כמות ישויות בקבוצה אחת לעומת קבוצה שנייה.
	- קשר Many-To-Many, One-To-Many, One-To-One
	- במקרה הכללי שבו יש רק חצים משולשים, מספר הישויות בקשר הוא המינימום של כל המכפלות של גדלי הקבוצות בקשר בלי קבוצות שיש חץ אליהן. 
- תרגום דיאגרמה לטבלה. 
	- חץ משולש, חץ עגול, ירושה, ישות חלשה

#### נוסחאות
- חישובים של גדלי יחסים מקסימליים.
---
## אלגברה רלציונית

#### הגדרות
 - הטלה $\pi$, בחירה $\sigma$, שינוי שם $\rho$.
 - איחוד, הפרש, מכפלה קרטזית 
 - חיתוך, צירוף על תנאי, צירוף טבעי, **חילוק**
#### אלגוריתמים
 - הבנה של מה שאילתה עושה. 
 - שקילות בין שאילתות. כנראה שלא פורמלית אבל למדנו איך לעשות את זה פורמלית.

---
## שפת SQL
#### אלגוריתמים
 - כל השאילות שראיתי במבחנים היו מסוג Select.
 - שאילתות בסיסיות, שימוש בתבניות LIKE. _ = תו אחד כלשהו, % = 0 תווים+.
 - שימוש ב-UNION, EXCEPT, INTERSECT וכן UNION ALL כדי לשמר כפילויות
 - תתי שאילתות ב-WHERE
 - מימוש פעולת חילוק ב-SQL
 - תתי שאילתות ב-FROM (לא כזה שימושי)
 - אגרגציות: GROUP BY, HAVING
 - חוקים של ערכי NULL. ב-Queries בוליאנים מקבלים רק את מה שהוא אמת ולא מה שהוא שקר או UNKNOWN.
 - צירוף NATURAL LEFT OUTER JOIN, NATURAL RIGHT OUTER JOIN, FULL OUTER JOIN, שמוסיפים את הטופלים שלא הצליחו למצוא צירוף ומרפדים אותם באפסים. 
 - שימוש ב-With ... As מאוד שימוש לשאילתות 

---
## אבליואציה

#### נוסחאות אינדקסים
##### 

> [!question]- תכונות של האינדקס - עץ B+
>  - עץ מאוזן (מרחקם של כל העלים מהשורש ‐ זהה)
>  - לכל קודקוד יש לכל היותר d בנים (כאשר d היא דרגת הפיצול)
>  - לכל קודקוד שאינו השורש יש לפחות $\lceil d/2 \rceil$ בנים. 
>  - לכל קודקוד (כולל עלים) יש לפחות  $\lceil d/2 \rceil - 1$ ערכי חיפוש.
>  - ????????? לכל קודקוד שאינו עלה, שיש לו $k$ בנים - יהיו $k-1$ ערכי חיפוש.


> [!question]- בחירת דרגת הפיצול
> נרצה שכל קודקוד ייכנס בבלוק אחד. ונרצה לנצל כמה שיותר מהבלוק.
> כלומר נרצה לקיים:
>$$
>(size of pointer) \cdot d + (search key size) \cdot (d - 1) \leq block size
>$$
>וניקח את ה-d המקסימלי שמקיים את זה.


> [!question]- עלות ירידה בעץ
> העלות הזאת היא גובה העץ (זה מספר השכבות **לא כולל** שכבת העלים). אם יש $N$ שורות בטבלה, עלות זו היא:
> $$
> \lceil log_{\lceil \frac{d}{2} \rceil} N \rceil
> $$


> [!question]- עלות קריאת עלים ושורות מהדיסק
> אם עושים Index unique scan רק צריך לקרוא עלה אחד וסיימנו. אחרת צריך לעבור על שכבת העלים ולקרוא כמות עלים מסויימת. נסמן ב-k את כמות הטופלים שמתאימים לשאילה, כלומר השורות בטבלה שעונות על התנאי. מתכונות העץ B+, לכל עלה יש לפחות $\lceil d/2 \rceil - 1$ ערכי חיפוש מתאימים ועל כן k הטופלים יתפרשו על פני כמות העלים הבא:
> $$
>\lceil \frac{k}{\lceil d/2 \rceil - 1} \rceil
>$$
>אם בנוסף נרצה לקרוא את המידע מהדיסק כי הוא לא שמור בעץ נצטרך עוד 
>$$
>max(k, totalblocks)
>$$
>קריאות


> [!question]- חישוב כמות בלוקים כוללת של טבלה
> לעיתים המידע הזה לא ניתן וצריך לחשב אותו. עושים זאת כך:
> - חישוב הגודל של שורה
> - חישוב מספר השורות בבלוק (גודל בלוק חלקי גודל שורה) (לעגל למטה)
> - חישוב מספר הבלוקים הכולל (מספר השורות חלקי מספר השורות בבלוק) (לעגל למעלה)

- ראינו שאפשר לשמור באינקס עוד מידע בעלים כדי שלא נצטרך לגשת לדאטא. אפשר גם שהאינדקס יהיה על שני ערכים וזה תכלס עוזר רק עבור שאילתות של שווין עבור הערך הראשון והשוואה עבור הערך השני. 

#### אלגוריתם Block Nested Loops Join (BNLJ) 
(לצירוף)

> [!question]- עלות BNLJ
> נסמן M היא כמות הבלוקים בזיכרון. נסמן S היחס החיצוני וR היחס הפנימי. נזכור שבאלגוריתם קוראים את היחס החיצוני פעם אחת, ואת היחס הפנימי מספר פעמים עבור כמות החלקים של היחס החיצוני. אז העלות היא:
> $$
> B(S) + B(R) \cdot \lceil \frac{B(S)}{M-2} \rceil
> $$
> בפועל בבחירת תכנית אופטימלית נשתמש בנוסחא הבא:
> $$
> Read(E_S) + Read(E_R) \cdot \lceil \frac{B(E_S)}{M-2} \rceil
> $$
> כאשר Read זו העלות של הקריאה מהדיסק. יכול להיות בלי אינדקס (ואז זה פשוט הגודל של הטבלה), או עם אינקס ופעולת בחירה ואז זה מקטין את זה. ו$B(E_S)$ זה ממש הגודל בבלוקים של מה ששומרים.

דחיית פעולת הצירוף לאחר פעולת בחירה זה תמיד דבר טוב, וזה משנה את העלות. 

#### הערכת גודל הפלט של פעולות בחירה ו-JOIN
למה זה רלוונטי? כדי לבחור שאילתה אופטימלית. נרצה לחשב את העלות של BNLJ כ-Pipe מתוך פעולות של צירוף ובחירה. לשם כך נצטרך להעריך את כמות הבלוקים לאחר הפעולות האלה. (כלומר $B(E_S)$ במונחים של מה שכתבתי על BNLJ).


> [!question]- הערכת גודל הפלט
> - לפעמים משתמשים בסימון V(R,C)=20, זה אומר שיש 20 ערכים שונים לעמודה C בטבלה R. ואז אם רוצים ערך ספציפי מחלקים ב20.
> - אם אומרים C<145 ולא ידועה התפלגות מחלקים ב-3 (באופן שרירותי)
> - אם יש שילוב AND של שני תנאים אז מחלקים בשני הדברים.
> - אם יש שילוב OR נגיד  A = ’a’ OR B = ’b’ אז הנוסחא היא:
> $$
> T(R) \cdot (1-(1-\frac{1}{V(R,A)}) \cdot (1 - \frac{1}{V(R,B)}))
> $$
> - אם יש JOIN נגיד SELECT * FROM R, S WHERE R.A = S.A אז הנוסחא היא:
> $$
> \frac{T(R) \cdot T(S)}{max\{V(R,A),V(S,A)\}}
> $$
> - ואם נגיד מוסיפים לJoin גם תנאי אז פשוט מחלקים. 
> 	- בנוסף אם בJOIN יש מפתח אז V הוא פשוט כל השורות ואז הגודל יוצא כמות השורות באחת הטבלאות.


#### בחירת תכנית אופטימלית לצירוף

- בגלל הקיצוצים בקורס בעיקרון צריך לפעול כך.
	- תמיד נניח שפעולות בחירה והטלה הן ראשונות. 
	- אם יש אינדקס על טבלה נחשב על העלות שלה לעומת FULL TABLE SCAN. וניקח את הזול יותר.
	- נבדוק את העלות של BNLJ עבור שתי האפשרויות של היחס הפנימי והחיצוני. וניקח את הזול יותר.

הערה: אם אומרים שיש עלות גישה זניח לאינדקס עדיין צריך לחשב ב-READ את העלות של הגישה לבלוקים של הדאטא. 

---
## תורת התכנון

#### סוגי שאלות מעצבנות
- ראינו בתרגול שאלות של האם תלויות קורות בהכרח בטבלאות קטנות  

#### הגדרות
- ***צורה נורמלית ראשונה:*** טבלה הינה בצורה נורמלית ראשונה אם כל שדה מכיל ערכים אטומיים (לא רשימות) ואין שדות שחוזרים על עצמם.
- ***תלות פונקציונלית:*** התלות  X → Y מתקיימת במופע-r אמ"ם לכל $s,t \in r$ מתקיים 
$$
s[X] = t[X] \implies s[Y] = t[Y]
$$
- ***תלות טריוויאלית:*** תלות פונקציונלית היא טריוויאלית אם צד ימין מוכל בצד שמאל.
- ***סגור:*** של קבוצת תלויות פונקציונליות F וקבוצת שדות X, הוא קבוצת השדות כך שלכל A בקבוצה מתקיים ש-X→A נובע מ-F.
- ***מפתח על:*** X הוא מפתח על ב-R אם $X^+=R$.
- ***מפתח:*** X הוא מפתח ב-R R אם $X^+=R$ וגם אי אפשר להוריד שום שדה מ-X ולהישאר עם מפתח. נשים לב כי ליחס יכולים להיות כמה מפתחות בכמה גדלים שונים.
- **צורת BCNF***: יחס R הוא בצורה הנורמלית BCNF אם לכל תלות X → Y מתקיימת אחת משתי התכונות הבאות:
	1. הקבוצה X היא מפתח על של R.
	2. התלות X → Y היא טריוויאלית.
- ***צורת 3NF:*** יחס R הוא בצורה הנורמלית 3NF אם לכל תלות X → Y מתקיימת אחת משתי התכונות הבאות:
	1. הקבוצה X היא מפתח על של R.
	2. לכל $A \in Y$ מתקיים $A \in X$ או $A$ נמצא במפתח כלשהו.
 - **פירוק ללא אובדן:*** פירוק של $R$ לתתי היחסים $R_1,...,R_n$ הוא פירוק ללא אובדן ביחס לקבוצת התלויות הפונקציונליות $F$ אם לכל מופע $r$ של $R$ המקיים את $F$ מתקיים:
$$
 r = \pi_{R_1}r \bowtie ... \bowtie \pi_{R_n}r
$$
- ***פירוק משמר תלויות:*** (ההגדרה שנתנו יותר מורכבת אבל זו מספיקה ואינטואיטיבית יותר) פירוק של יחס $R$ עם קבוצות תלויות פונקציונליות $F$ לתתי יחסים $R_1,...,R_n$ הוא משמר תלויות אם לכל תלות  X → Y ב-F מתקיים ש-X → Y נובע מ-$F_{R_1} \cup ... \cup F_{R_n}$.
#### טענות
- אם יחס הוא ב-BCNF אז הוא גם ב-3NF. (ולא בהכרח להיפך)
- יחס עם שני שדות הוא תמיד ב-BCNF (הוכח בתרגול)
- פירוק של $R$ לשני תתי יחסים $R_1,R_2$ הוא פירוק ללא אובדן ביחס לקבוצת התלויות $F$ אם $R_1 \in (R_1 \cap R_2)^+$ או  $R_2 \in (R_1 \cap R_2)^+$  

#### אלגוריתמים

> [!question]- אלגוריתם לחישוב סגור
> מתחילים עם X ומוסיפים עוד שדות על פי התלויות עד שאי אפשר יותר.
> הוכחנו את נכונות האלגוריתם אבל זה לא נראה לי משהו שכזה רלוונטי למבחן.


> [!question]- למציאת מפתח
> מתחילים עם קבוצת שדות שהיא כל R ולכל שדה נבדוק האם הוא מיותר כלומר האם אפשר לגרור אותו משאר השדות. אם כן נוציא אותו ונעבור לשדה הבא (בשדה הבא לא נשתמש בו ישר).


> [!question]- למציאת כל המפתחות
> - לא רוצה לתאר כדי לא לשכוח פרטים.
> - בהתחלה מוצאים מפתח כלשהו, מנסים להוציא ממנו שדות על ידי שדות שגוררים את השדות שלו. אם זה לא מכיל מפתח שידוע כבר עושים מינימיזציה למה שמקבלים וכך מקבלים מפתח חדש. עוצרים כאשר כל העלים בעץ כבר הכילו מפתחות ידועים. 
> - הכי קל עם עץ כזה. 


> [!question]- בדיקת צורה נורמלית של יחס
> - ראשית עוברים תלות תלות בודקים אם הוא ב-BCNF על ידי ההגדרה (תלויות טריוויאלית, סגור של צד שמאל)
> - כל מה ש"עובר" BCNF עובר גם 3NF. 
> - אם משהו לא "עובר" BCNF נתחיל לבדוק את התנאי של 3NF. לשם כך צריך למצוא את כל המפתחות על ידי האלגוריתם שתיארנו קודם. 


> [!question]- בדיקה האם פירוק ל-$N$ תתי יחסים הוא ללא אובדן
> - יוצרים טבלה שבה כל שורה היא תת יחס וכל עמודה היא שדה
> - ממלאים את הטבלה ב-$a$ ו-$b$. 
> - כל עוד יש שורות בטבלה שסותרות תלות פונקציונלית, נתקן אותן. (a מנצח את b)
> - לבסוף, אם קיימת שורה שמכילה רק a-ים הפירוק הוא ללא אובדן!
> - נשים לב כי אם לא קיימת שורה קיבלנו דוגמא נגדית, כלומר מופע של R שמקיים את התלויות ושהפירוק שלו הוא עם אובדן!


> [!question]- בדיקה האם פירוק ל-$N$ תתי יחסים משמר תלויות
> - לכל תלות ב-$F$ מהסוג X → Y, מחשבים את מה שנובע מ-X בפירוק.
> - נשים לב שאם יש תלות ששני הצדדים שלה מוכלים בתת-סכימה, היא בבירור משתמרת!
> - אחרת, מאתחלים:
> $$
> Z := X
> $$
> - ואז רצים בלולאה ועוברים על תתי היחסים (יכול להיות שנצטרך לעבור עליהם יותר מפעם אחת!) ומבצעים:
> $$
> Z:= Z \cup ((Z \cap R_i)^+ \cap R_i)
> $$
> חישוב הסגור הוא למעשה על פי התלויות ב-$F$ המלא!


> [!question]- מציאת הצורה הנורמלית של תתי יחסים בפירוק שרירותי
> - לעיתים ניתן לנו פירוק (שלא על ידי אחד האלגוריתמים הבאים המבטיחים פירוק ב-BCNF או ב-3NF), ושואלים אותנו מה הצורה הנורמלית שלו. לשם כך צריך לחשב את **ההטלה** של קבוצת התלויות הפונקציונליות על כל תת-יחס. אבל זה אקספוננציאלי. על כן קיים אלגוריתם שמחשב קבוצה שקולה להטלה הזאת וזה סבבה לעבוד איתה!
> - עוברים ממש על כל תתי הקבוצות:
> - לכל $X \in R_i$ מוסיפים את התלות הפונקציונלית $X \to (X^+ \cap R_i)$.
>(הסגור הוא לפי F המלא)
>- אז כשנרצה לדעת מה הצורה הנורמלית של תת-היחס, נבדוק את הקריטריונים על קבוצת התלויות שמצאנו!
>- משתמשים באלגוריתם הזה גם בפירוק BCNF.


> [!question]- מציאת כיסוי מינימלי
> - בהינתן קבוצת תלויות פונקציונליות נרצה למצוא קבוצה שקולה מינימלית.
> - **מוטיבציה:*** כדי להשתמש בזה באלגוריתם למציאת פירוק ללא אובדן, משמר תלויות, 3NF. 
> - שלושה שלבים מרכזיים. מקבלים בתור קלט קבוצת תלויות:
> 	1. נדאג לכך שלכל תלות יהיה רק שדה אחד בצד ימין.
> 	2. נמחק שדות מיותרים מצד שמאל של תלויות פונקציונליות. (כלומר כמו אלגוריתם למציאת מפתח נחשב את הסגור המלא על פי F המקורית (כולל התלות הנוכחית) בלי כל שדה)
> 	3. נמחק תלויות מיותרות (כאלו שנובעות מתלויות אחרות).


> [!question]- מציאת פירוק ללא אובדן, משמר תלויות, כל תת סכימה ב $3NF$ לפחות
> - נמצא כיסוי מינימלי G.
> - לכל $X \to A$ ב-G, נוסיף את תת-הסכימה $XA$. 
> - אם בסוף שום סכימה לא מכילה מפתח, להוסיף מפתח בתור סכימה.
> - להסיר סכימות שמוכלות בסכימות אחרות.


> [!question]- מציאת פירוק ללא אובדן, כל תת סכימה ב-$BCNF$ לפחות
> - הרצה הרצה הרצה כדי להבין
> - האלגוריתם רקורסיבי, מחפש הפרות. לכל הפרה של X → Y מגדיר:
> $$
> R_1 = X^+ \newline
> $$
> $$
> R_2 = X \cup (R - X^+) \newline
> $$
> $$
> return \, FindBCNFDecompostion(R_1, F_{R_1}) \cup FindBCNFDecompostion(R_2, F_{R_2}) 
> $$
> - טיפים: מריצים עם עץ, צריך לחשב את הסגור פעם אחת, סכימה בגודל 2 בהכרח ב-BNCF (זה התנאי עצירה). לא חייב לחשב את ההטלה המלאה של F על תתי הסכימות, אפשר להתחיל לחשב ולעצור כשמוצאים תלות שנוגדת את BCNF. אם יש n אטריביוטים, קבוצה בגודל n-1 בטוח לא תפר BCNF.


---
## ניהול טרנזקציות

#### הגדרות
- בעיית Dirty Read
- בעיית Dirty Write
- בעיית Non-Repeatable Read
- בעיית Phantom Read
- בעיית תזמון לא סריאלייזבל

- סוגי קונפליקטים: RW, WR, WW

- ***תזמון קונסיסטנטי:*** אם סדר הפעולות של כל טרנזקציה הוא כמו שהוגדר לה.
- ***תזמון מלא:*** אם הטרנזקציות בתזמון מתבצעות עד לכדי commit או ‐ abort
- ***תזמון סריאלי:*** אם כל הטרנזקציות מתבצעות אחת אחרי השנייה ולא משתלבות זו בזו.
- ***תזמון בר סידור (Serializable):*** אם ההשפעה של התזמון על הדאטאבייס זהה לתזמון סדרתי כלשהו.
- ***תזמון בר התאוששות (Recoverable):*** אם כל טרנזקציה עושה קומיט רק אחרי שכל הטרנזקיות שהיא קראה שינוי שלהן עשו קומיט.
- ***תזמון נמנע מ-Cascading Aborts:*** אם טרנזקציות קוראות רק שינויים של טרנזקציות שעשו קומיט.
- ***תזמון מחמיר (Strict):*** אם טרנזקציות קוראות **או כותבות** רק על שינויים של טרנזקציות שעשו קומיט.
- ***תזמונים שקולי קונפליקט:*** שני תזמונים הם שקולי קונפליקטים אם יש להם אותם קונפליקטים בין אותן טרנזקציות באותו סדר.
- ***תזמון בר סידור קונפליקטים (Conflict Serializable):*** אם כל קונפליקט שמתקיים בתזמון אחד מתקיים גם בתזמון השני, והסדר **הפנימי** של כל קונפליקט זהה. 

- ***תזמון בר השגה על ידי 2PL:*** אם ניתן לקבל אותו תוך שימוש בפרוטוקול 2PL.

- ***פרוטוקול 2PL:***
	- טרנזקציות יכולות לבקש מנעול אקסקלוסיבי/משותף/לשדרג.
	- לכל אובייקט יש מנעול משלו.
	- מנעול משותף יכול להיות לכמה טרנזקציות בו זמנית אבל מנעול אקסקלוסיבי הוא בלעדי (וגם לא יכולים להיות מנעולים משותפים אם יש אקסקלוסיבי).
	- ברגע שטרנזקציה משחררת מנעול היא לא יכולה לבקש עוד מנעול.
- ***פרוטוקול STRICT-2PL:***
	- כמו 2PL רק שטרנזקציה משחררת את **כל** המנעולים שלה **רק** כשהיא עושה Commit או Abort.
#### טענות
 - כל תזמון שנמנע מ-Cascading Aborts, הוא גם Recoverable. (ולא להיפך).
 - כל תזמון בר סידור קונפליקטים הוא בר סידור. למעשה:
 - 
$$
Recoverable \subseteq Cascadeless \subseteq Strict
$$
 - כל תזמון הניתן להשגה על ידי 2PL הוא בר סידור קונפליקטים (ועל כן גם בר סידור). (הוכחה: בעזרת גרף הקדימויות של הקונפליקטים) (אבל לאו דווקא בר התאוששות)
 - כל תזמון הניתן להשגה על ידי STRICT-2PL הוא בר סידור קונפליקטים **וגם** מחמיר.
 - פרוטוקול Simple Timestamp שקול קונפליקטים לתזמון שבו סדר הטרנזקציות הוא ה-TS שלהן. 


#### אלגוריתמים

> [!question]- בדיקה האם תזמון הוא בר סידור קונפליקטים
> - נבנה גרף שבו כל קודקוד הוא טרנזקציה, ונמתח קשת בין טרנזקציות על פי הקונפליקטים. (למשל אם יש קונפליקט WW בין טרנזקציה 1 ל-2 כאשר הW הראשון הוא של 1, נמתח קשת מכוונת מ-1 ל-2)
> - אם אין מעגל בגרף הסופי, אז התזמון הוא בר סידור קונפליקטים (!) ויהיה שקול לכל תזמון סדרתי שהוא סידור טיפולוגי של הגרף (!). 


> [!question]- בדיקה האם תזמון הוא בר השגה על ידי $2PL$
> - ננסה להוסיף לתזמון פעולות S,X,U עד שנצליח. אם נגיע למצב שבלתי אפשרי להתמודד איתו, הוא לא בר השגה.


> [!question]- שיטת $Wait-Die$ למניעת דדלוק
> - אם החדשה שמבקשת מנעול תפוס התחילה קודם, אז היא תחכה.
> - אחרת, היא תמות. ותעשה ריסטראט **עם אותו TS.**


> [!question]- שיטת $Wound-Wait$ למניעת דדלוק
> - אם החדשה שמבקשת מנעול תפוס התחילה קודם, אז היא תהרוג את הישנה. ואז הישנה תעשה ריסטארט **עם אותו TS**.
> - אחרת, היא תחכה.


> [!question]- זיהוי דדלוק
> - מציירים גרף קדימויות של מי מחכה למי, אם יש בגרף מעגל יש דדלוק.


> [!question]- פרוטוקול Simple Timestamp
> - לכל אובייקט שומרים WTS ו-RTS שמאותחלים להיות 0. לכל טרנזקציה נותנים TS על פי הזמן שהיא התחילה.
> - לטרנזקציות אסור להשתמש בדברים מהעתיד, ז"א:
> 	- אם טרנזקציה מנסה לקרוא, הוא בודקת את ה-WTS, אם הוא מהעתיד היא עושה אבורט וריסטראט עם TS חדש. אחרת, היא מעדכנת את ה-RTS להיות ה-TS שלה, שומרת עותק לוקאלי של מה שקראה וממשיכה.
> 	- אם טרנזקציה מנסה לכתוב, היא בודקת את ה-RTS, אם הוא מהעתיד היא עושה אבורט וריסטארט עם TS חדש. אחרת, היא בודקת את ה-WTS, אם הוא מהעתיד, ולא משתמשים בחוק הכתיבה של תומאס, היא עושה אבורט וריסטראט עם TS חדש. אם ה-WTS הוא מהעתיד וכן משתמשים בחוק הכתיבה של תומאס, היא מבצעת כתיבה על העתק לוקאלי של האובייקט. לבסוף אם גם ה-RTS וגם ה-WTS לא מהעתיד, הכול סבבה והיא יכולה לכתוב ולעדכן את ה-WTS להיות ה-TS שלה. 
