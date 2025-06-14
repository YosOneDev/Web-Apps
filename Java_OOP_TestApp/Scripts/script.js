const questions = [
    {
        question: "Какво е полиморфизъм?",
        options: {
            a: "Използване на множество методи със същото име",
            b: "Наследяване на класове",
            c: "Инкапсулиране на данни",
            d: "Всичко от горепосоченото"
        },
        correct: "a"
    },
    {
        question: "Каква е разликата между методи с override и overload?",
        options: {
            a: "override означава различни параметри; overload - същото поведение",
            b: "override - същото име и параметри; overload - различни параметри",
            c: "Няма разлика",
            d: "override е част от интерфейси, overload не е"
        },
        correct: "b"
    },
    {
        question: "Какво означава понятието „наследяване“ в обектно-ориентираното програмиране?",
        options: {
            a: "Създаване на множество обекти",
            b: "Споделяне на методи и свойства между класове",
            c: "Използване на вътрешни класове",
            d: "Създаване на интерфейси"
        },
        correct: "b"
    },
    {
        question: "Кое е вярно за полиморфизма?",
        options: {
            a: "Един и същ метод може да има различно поведение в зависимост от класа",
            b: "Клас може да наследи множество родителски класове",
            c: "Полиморфизмът се използва само с интерфейси",
            d: "Методи в различни класове не могат да имат едно и също име"
        },
        correct: "a"
    },
    {
        question: "Как се дефинира вътрешен клас в Java?",
        options: {
            a: "Чрез ключовата дума `inner`",
            b: "Чрез дефинирането на клас в рамките на друг клас",
            c: "Чрез имплементиране на интерфейс",
            d: "Чрез използване на наследяване"
        },
        correct: "b"
    },
    {
        question: "Какво представлява RTTI в Java?",
        options: {
            a: "Механизъм за определяне на типа на обект по време на компилация",
            b: "Механизъм за определяне на типа на обект по време на изпълнение",
            c: "Метод за създаване на анонимни вътрешни класове",
            d: "Способност за използване на статични методи"
        },
        correct: "b"
    },
    {
        question: "Кой от следните методи принадлежи на класа `Object`?",
        options: {
            a: "finalize()",
            b: "clone()",
            c: "toString()",
            d: "Всички от изброените"
        },
        correct: "d"
    },
    {
        question: "Кой клас в Java се използва за създаване на графичен потребителски интерфейс?",
        options: {
            a: "JTextField",
            b: "JFrame",
            c: "JButton",
            d: "Всички от изброените"
        },
        correct: "d"
    },
    {
        question: "Какво е основната цел на генетичното програмиране?",
        options: {
            a: "Оптимизация на код чрез наследяване",
            b: "Автоматично генериране на алгоритми",
            c: "Създаване на вътрешни класове",
            d: "Управление на големи масиви от данни"
        },
        correct: "b"
    },
    {
        question: "Кой интерфейс се използва за създаване на динамичен списък в Java?",
        options: {
            a: "java.util.Set",
            b: "java.util.Map",
            c: "java.util.List",
            d: "java.util.Collection"
        },
        correct: "c"
    },
    {
        question: "Кое от изброените е характеристика на функционалното програмиране?",
        options: {
            a: "Използване на лямбда изрази",
            b: "Предпочитане на иммутабилни данни",
            c: "Използване на функции като първокласни обекти",
            d: "Всички от изброените"
        },
        correct: "d"
    },
    {
        question: "Какво представлява колекция в Java?",
        options: {
            a: "Обект за съхраняване и управление на множество елементи",
            b: "Механизъм за управление на обектно-ориентирани класове",
            c: "Тип данни за съхранение на числа",
            d: "Метод за имплементиране на вътрешни класове"
        },
        correct: "a"
    },
    {
        question: "Кое от следните твърдения за полиморфизма е вярно? (Изберете всички верни отговори)",
        options: {
            a: "Позволява един и същ метод да бъде използван с различни типове данни",
            b: "Изисква наследяване",
            c: "Не е възможно с интерфейси",
            d: "Поддържа се чрез методи с еднакъв подпис, но различно поведение"
        },
        correct: ["a", "d"]
    },
    {
        question: "Какво ще се изведе от следния код?",
        image: "Images/image_1.png",
        options: {
            a: "A",
            b: "B",
            c: "Грешка при компилация",
            d: "Грешка по време на изпълнение"
        },
        correct: "b"
    },
    {
        question: "Каква е основната причина за използване на вътрешни класове?",
        options: {
            a: "Достъп до методи и променливи на външния клас",
            b: "Създаване на множество наследници",
            c: "Оптимизиране на производителността",
            d: "Създаване на статични методи"
        },
        correct: "a"
    },
    {
        question: "Кой от следните методи на `Object` клас може да бъде override-нат?",
        options: {
            a: "toString()",
            b: "hashCode()",
            c: "equals()",
            d: "Всички от изброените"
        },
        correct: "d"
    },
    {
        question: "Какво ще се изведе на екрана от следния код?",
        image: "Images/image_2.png",
        options: {
            a: "Java",
            b: "OOP",
            c: "Грешка при компилация",
            d: "Грешка по време на изпълнение"
        },
        correct: "b"
    },
    {
        question: "Кое от следните е характеристика на функционалното програмиране?",
        options: {
            a: "Функциите могат да бъдат предавани като аргументи",
            b: "Функциите винаги връщат стойност",
            c: "Не се използват лямбда изрази",
            d: "Данните се променят директно"
        },
        correct: "a"
    },
    {
        question: "Какво е ролята на `Collections` класа в Java?",
        options: {
            a: "Осигурява основни структури от данни като списъци и множества",
            b: "Осигурява статични методи за обработка на колекции",
            c: "Служи като базов клас за всички колекции",
            d: "Служи за управление на потоци"
        },
        correct: "b"
    },
    {
        question: "Кое от следните твърдения за генетичното програмиране е вярно?",
        options: {
            a: "Използва алгоритми за еволюция",
            b: "Генерира код чрез кръстосване и мутации",
            c: "Не се използва в оптимизационни задачи",
            d: "Не поддържа случайност"
        },
        correct: ["a", "b"]
    },
    {
        question: "Какво ще се изведе от следния код?",
        image: "Images/image_3.png",
        options: {
            a: "Bark",
            b: "Грешка при компилация",
            c: "Грешка по време на изпълнение",
            d: "Нищо"
        },
        correct: "a"
    },
    {
        question: "Кое от следните не е част от Java GUI библиотеките?",
        options: {
            a: "Swing",
            b: "JavaFX",
            c: "AWT",
            d: "ReactJS"
        },
        correct: "d"
    },
    {
        question: "Какво е инкапсулация в обектно-ориентираното програмиране?",
        options: {
            a: "Процес на скриване на вътрешната имплементация на обектите",
            b: "Процес на добавяне на нови методи към класовете",
            c: "Процес на изпълнение на код по време на компилация",
            d: "Процес на наследяване на класове"
        },
        correct: "a"
    },
    {
        question: "Какво представлява интерфейс в Java?",
        options: {
            a: "Клас, който не може да има методи",
            b: "Тип, който съдържа само дефиниции на методи без реализации",
            c: "Абстрактен клас, който не може да бъде наследяван",
            d: "Клас, който съдържа само статични методи"
        },
        correct: "b"
    },
    {
        question: "Какво прави ключовата дума `super` в Java?",
        options: {
            a: "Извиква конструктор на текущия клас",
            b: "Извиква методи и конструктори от родителския клас",
            c: "Позволява достъп до статични методи",
            d: "Използва се за създаване на нови обекти"
        },
        correct: "b"
    },
    {
        question: "Какво е абстрактен клас в Java?",
        options: {
            a: "Клас, който не може да има абстрактни методи",
            b: "Клас, който не може да бъде инстанциран директно",
            c: "Клас, който не може да наследява други класове",
            d: "Клас, който няма методи"
        },
        correct: "b"
    },
    {
        question: "Какво прави ключовата дума `this` в Java?",
        options: {
            a: "Позволява достъп до текущия клас",
            b: "Позволява достъп до текущия обект",
            c: "Инициализира нов обект",
            d: "Извиква статични методи"
        },
        correct: "b"
    },
    {
        question: "Какво е разликата между `==` и `equals()` метод в Java?",
        options: {
            a: "`==` сравнява обекти по стойност, а `equals()` по адрес на паметта",
            b: "`==` сравнява обекти по адрес на паметта, а `equals()` по стойност",
            c: "Няма разлика",
            d: "`==` работи само с примитивни типове, а `equals()` с обекти"
        },
        correct: "b"
    },
    {
        question: "Какво е използването на `default` методи в интерфейси от Java 8?",
        options: {
            a: "За да се дефинират методи с имплементации в интерфейси",
            b: "За да се създадат абстрактни класове в интерфейси",
            c: "За да се имплементират нови интерфейси",
            d: "За да се предотврати имплементирането на методи в класове"
        },
        correct: "a"
    },
    {
        question: "Какво е множествено наследяване в Java?",
        options: {
            a: "Java не поддържа множествено наследяване",
            b: "Java позволява наследяване от повече от два класа",
            c: "Java поддържа наследяване само на интерфейси",
            d: "Java позволява наследяване от множество класове, ако те не имат конфликти"
        },
        correct: "a"
    },
    {
        question: "Какво е разликата между статични и нестатични методи?",
        options: {
            a: "Статичните методи не могат да имат параметри",
            b: "Нестатичните методи се извикват чрез обект, докато статичните могат да се извикват директно от класа",
            c: "Статичните методи могат да бъдат надписвани, а нестатичните не могат",
            d: "Няма разлика"
        },
        correct: "b"
    },
    {
        question: "Какво е депрецирен метод?",
        options: {
            a: "Метод, който не може да бъде извикан",
            b: "Метод, който е остарял и не трябва да се използва в нов код",
            c: "Метод, който е предназначен за имплементиране на нови класове",
            d: "Метод, който не връща стойност"
        },
        correct: "b"
    },
    {
        question: "Какво е разликата между абстрактен клас и интерфейс в Java?",
        options: {
            a: "Абстрактният клас може да има имплементирани методи, а интерфейсът не може",
            b: "Интерфейсите могат да имат статични методи, а абстрактните класове не могат",
            c: "Абстрактните класове могат да имат конструктори, а интерфейсите не могат",
            d: "Интерфейсите могат да бъдат наследявани от само един клас, докато абстрактните класове могат да се наследяват от множество класове"
        },
        correct: ["a", "c"]
    },
    {
        question: "Какво е основното предназначение на ключовата дума `final` в Java?",
        options: {
            a: "Предотвратява наследяването на класове",
            b: "Позволява променливите да се променят по време на изпълнение",
            c: "Предотвратява промяната на стойността на променливата след инициализация",
            d: "Позволява дефинирането на статични методи в класове"
        },
        correct: ["a", "c"]
    },
    {
        question: "Какво представлява `Cloneable` интерфейсът в Java?",
        options: {
            a: "Интерфейс, който позволява клонирането на обекти",
            b: "Интерфейс, който се използва за обработка на колекции",
            c: "Интерфейс, който не позволява клониране на обекти",
            d: "Интерфейс, който позволява създаването на динамични класове"
        },
        correct: "a"
    },
    {
        question: "Кое от следните твърдения е вярно относно използването на `super()` в Java?",
        options: {
            a: "Извиква конструктор на текущия клас",
            b: "Извиква конструктор на родителския клас",
            c: "Не може да се използва в конструкторите на класове",
            d: "Може да се използва само в абстрактни класове"
        },
        correct: "b"
    },
    {
        question: "Какви типове може да върне метод в Java?",
        options: {
            a: "Първичен тип данни (примитивни типове като int, double)",
            b: "Обектни типове (например String, Integer)",
            c: "Може да върне повече от един тип чрез обект",
            d: "Невъзможно е да върне тип, различен от primitivни типове"
        },
        correct: ["a", "b"]
    },
    {
        question: "Какво е лaмбда израз в Java?",
        options: {
            a: "Метод за дефиниране на функции без тяло",
            b: "Анонимна функция, която може да бъде използвана като аргумент на метод",
            c: "Възможност за динамично дефиниране на нови класове",
            d: "Метод, който връща резултат без да приема параметри"
        },
        correct: ["b", "a"]
    },
    {
        question: "Какво ще стане, ако изпълним `try` блок без `catch` блок в Java?",
        options: {
            a: "Грешка при компилация, тъй като `catch` е задължителен",
            b: "Грешка по време на изпълнение, ако възникне изключение",
            c: "Програмата ще продължи нормално, без да се хваща изключението",
            d: "Няма да има никакви проблеми, тъй като `catch` не е задължителен"
        },
        correct: ["a", "b"]
    },
    {
        question: "Какво е разликата между `ArrayList` и `LinkedList` в Java?",
        options: {
            a: "`ArrayList` използва динамичен масив, а `LinkedList` използва свързан списък",
            b: "`ArrayList` предлага по-бързи операции за добавяне и премахване на елементи в началото на списъка",
            c: "`LinkedList` е по-бърз при произволен достъп до елементи",
            d: "`ArrayList` не поддържа нулеви стойности, докато `LinkedList` поддържа"
        },
        correct: ["a", "b"]
    },
    {
        question: "Какви са особеностите на `synchronized` блоковете в Java?",
        options: {
            a: "Те се използват за синхронизация на методи и блокове в многопоточни приложения",
            b: "Гарантират, че само един поток може да изпълнява блок от код по едно и също време",
            c: "Могат да бъдат използвани само с методи, които не връщат стойност",
            d: "Никога не предизвикват проблеми със синхронизация"
        },
        correct: ["a", "b"]
    },
    {
        question: "Какво е целта на `java.util.concurrent` пакета в Java?",
        options: {
            a: "Осигурява класове за управление на многозадачност и синхронизация",
            b: "Позволява създаването на нови потоци",
            c: "Осигурява класове за работа с бази данни",
            d: "Позволява работа с графични потребителски интерфейси"
        },
        correct: "a"
    },
    {
        question: "Какво представлява `this` ключовата дума в Java?",
        options: {
            a: "Отнася се към текущия обект на класа",
            b: "Позволява достъп до статични променливи",
            c: "Позволява създаване на нови обекти",
            d: "Се използва за създаване на методи за конструктори"
        },
        correct: "a"
    },
    {
        question: "Какъв тип изключение е `NullPointerException` в Java?",
        options: {
            a: "Checked exception",
            b: "Unchecked exception",
            c: "Runtime exception",
            d: "Error"
        },
        correct: ["b", "c"]
    },
    {
        question: "Какво означава принципът на инкапсулация в OOP?",
        options: {
            a: "Данните на обектите са скрити и достъпът до тях става само чрез публични методи",
            b: "Обектите могат да се наследяват от други обекти",
            c: "Обектите могат да имат само един метод",
            d: "Данните се съхраняват в отделни класове"
        },
        correct: "a"
    },
    {
        question: "Какво означава принципът на абстракция в OOP?",
        options: {
            a: "Отстраняване на сложността чрез показване на само важните детайли на обектите",
            b: "Позволява на обектите да изпълняват различни действия",
            c: "Обектите могат да бъдат преобразувани във всеки друг тип",
            d: "Отказ от използването на наследяване в класовете"
        },
        correct: "a"
    },
    {
        question: "Какво представлява инстанцирането на клас в Java?",
        options: {
            a: "Създаване на нов обект от даден клас",
            b: "Деклариране на нов клас",
            c: "Наследяване на клас от друг клас",
            d: "Инициализиране на променлива от клас"
        },
        correct: "a"
    },
    {
        question: "Кой от следните методи на клас може да се използва за сравняване на два обекта в Java?",
        options: {
            a: "compareTo()",
            b: "equals()",
            c: "hashCode()",
            d: "clone()"
        },
        correct: ["a", "b"]
    },
    {
        question: "Какво прави ключовата дума `static` в Java?",
        options: {
            a: "Позволява на методите и променливите да бъдат споделяни между всички екземпляри на клас",
            b: "Предотвратява наследяването на класове",
            c: "Създава методи, които могат да бъдат извиквани само от обекти",
            d: "Предотвратява създаването на нови инстанции на класа"
        },
        correct: "a"
    },
    {
        question: "Какво означава понятието „търсене на клас“ (class loading) в Java?",
        options: {
            a: "Процесът на извличане на класове от външни библиотеки",
            b: "Процесът на зареждане на класове от диска в паметта по време на изпълнение",
            c: "Процесът на компилация на класове в байт код",
            d: "Процесът на създаване на нови обекти от клас"
        },
        correct: "b"
    },
    {
        "question": "Каква е основната цел на декомпозицията в обектно-ориентираното програмиране?",
        "options": {
            "a": "Да разделим задачите на етапи на изпълнение",
            "b": "Да разделим софтуера на модули за по-лесно управление",
            "c": "Да намалим сложността на хардуера",
            "d": "Да ускорим компилаторния процес"
        },
        "correct": "b"
    },
    {
        "question": "Кой принцип в ООП позволява скриването на данни и имплементации от „външния свят“?",
        "options": {
            "a": "Полиморфизъм",
            "b": "Наследяване",
            "c": "Капсулиране",
            "d": "Декомпозиция"
        },
        "correct": "c"
    },
    {
        "question": "Каква е разликата между композиция и наследяване при многократно използване на код?",
        "options": {
            "a": "Композицията използва интерфейса на базовия клас, докато наследяването използва неговата имплементация",
            "b": "Наследяването е по-просто от композицията",
            "c": "Композицията позволява промени по време на изпълнение, а наследяването е по-ограничено",
            "d": "Наследяването не може да бъде комбинирано с други техники"
        },
        "correct": "c"
    },
    {
        "question": "Какво представлява ключовата дума 'super' в контекста на наследяването?",
        "options": {
            "a": "Извиква конструктора на производния клас",
            "b": "Извиква конструктора или метод от базовия клас",
            "c": "Дефинира нов метод в производния клас",
            "d": "Скрива метод на базовия клас"
        },
        "correct": "b"
    },
    {
        "question": "Какво е полиморфизъм в обектно-ориентираното програмиране?",
        "options": {
            "a": "Способността на обекти от различни класове да реагират различно на едни и същи съобщения",
            "b": "Процесът на преобразуване на обекти между различни типове",
            "c": "Метод за оптимизация на изпълнението",
            "d": "Процесът на наследяване на свойства и методи от базовия клас"
        },
        "correct": "a"
    },
    {
        "question": "Кое твърдение за късното свързване в Java е вярно?",
        "options": {
            "a": "То се извършва по време на компилация",
            "b": "То позволява на метода да бъде извикан в зависимост от типа на обекта по време на изпълнение",
            "c": "То не се използва по подразбиране в Java",
            "d": "То е валидно само за static методи"
        },
        "correct": "b"
    },
    {
        "question": "Каква е ролята на абстракцията в ООП?",
        "options": {
            "a": "Скрива ненужни детайли от реализацията на модули",
            "b": "Позволява използването на повече от един наследник",
            "c": "Свързва обекти по време на изпълнение",
            "d": "Създава нови типове данни от примитивни"
        },
        "correct": "a"
    },
    {
        "question": "Кое от следните е основна характеристика на обектно-ориентираното програмиране?",
        "options": {
            "a": "Създаване на отделни скриптове за всяка задача",
            "b": "Капсулиране, наследяване и полиморфизъм",
            "c": "Използване на глобални променливи",
            "d": "Използване на асемблерен код за оптимизация"
        },
        "correct": "b"
    },
    {
        "question": "Какво представлява понятието 'клас' в контекста на ООП?",
        "options": {
            "a": "Група от свързани функции",
            "b": "Шаблон, който дефинира данни и методи за обектите",
            "c": "Множество независими файлове с код",
            "d": "Процес за декомпозиране на софтуерни системи"
        },
        "correct": "b"
    },
    {
        "question": "Кое от следните описва 'информационното скриване' (information hiding)?",
        "options": {
            "a": "Скриване на всички методи и данни в класа",
            "b": "Ограничаване на достъпа до вътрешната реализация на обекта",
            "c": "Използване на ключовата дума 'abstract' за методи",
            "d": "Предоставяне на публичен достъп до всички компоненти на обекта"
        },
        "correct": "b"
    },
    {
        "question": "Каква е основната разлика между композиция и наследяване?",
        "options": {
            "a": "Композицията създава връзка „е“, докато наследяването създава връзка „има“",
            "b": "Композицията е по-гъвкава от наследяването",
            "c": "Наследяването изисква използване на интерфейси",
            "d": "Наследяването винаги е предпочитано пред композицията"
        },
        "correct": "b"
    },
    {
        "question": "Кога трябва да се използва ключовата дума 'final' за класове?",
        "options": {
            "a": "Когато искаме класът да бъде наследен",
            "b": "Когато искаме да предотвратим наследяването на класа",
            "c": "Когато класът съдържа само статични методи",
            "d": "Когато искаме да използваме композиция вместо наследяване"
        },
        "correct": "b"
    },
    {
        "question": "Какво е 'преобразуване нагоре' (upcasting)?",
        "options": {
            "a": "Преобразуване на обект от производния клас към базовия клас",
            "b": "Създаване на нов базов клас от производен клас",
            "c": "Динамично свързване на методи по време на изпълнение",
            "d": "Промяна на интерфейса на базовия клас"
        },
        "correct": "a"
    },
    {
        "question": "Какво е предназначението на метода 'toString()' в Java?",
        "options": {
            "a": "Служи за създаване на низове",
            "b": "Предоставя текстово представяне на обект",
            "c": "Предоставя достъп до всички публични методи на класа",
            "d": "Свързва обекти по време на изпълнение"
        },
        "correct": "b"
    },
    {
        "question": "Кое твърдение за късното свързване е вярно?",
        "options": {
            "a": "Извършва се по време на компилация",
            "b": "Позволява на метода да се избере динамично в зависимост от типа на обекта",
            "c": "Може да се използва само с final методи",
            "d": "Не е включено в Java"
        },
        "correct": "b"
    },
    {
        "question": "Какво представлява принципът на заместването (Liskov Substitution Principle)?",
        "options": {
            "a": "Всеки обект от базов тип може да бъде заменен с обект от производен тип",
            "b": "Всеки производен клас трябва да наследи методите на базовия клас без промяна",
            "c": "Програмата не трябва да се влияе от промени в производния клас",
            "d": "Всяка промяна в интерфейса на клас изисква промяна на производните класове"
        },
        "correct": "a"
    },
    {
        "question": "Какво е основното предимство на полиморфизма в ООП?",
        "options": {
            "a": "Позволява промени в кода без повторна компилация",
            "b": "Позволява създаване на универсален код, работещ с различни типове",
            "c": "Осигурява достъп до private членове на базовите класове",
            "d": "Премахва нуждата от наследяване"
        },
        "correct": "b"
    },
    {
        "question": "Как се реализира динамично свързване в Java?",
        "options": {
            "a": "Чрез ключовата дума 'static'",
            "b": "Чрез използване на абстрактни класове",
            "c": "Чрез виртуални таблици (VMT)",
            "d": "Чрез наследяване на интерфейси"
        },
        "correct": "c"
    }
    
    
    
    
    
    
    // Add more questions here 68 ig
];

const form = document.getElementById('test-form');
const resultDiv = document.getElementById('result');
const timerDiv = document.getElementById('timer');
const submitBtn = document.getElementById('submit-btn');
const newTestBtn = document.getElementById('new-test-btn'); // Бутон за нов тест

// Създаване на фиксиран таймер (по избор)
const fixedTimerDiv = document.createElement('div');
fixedTimerDiv.classList.add('timer', 'fixed-timer');
document.body.appendChild(fixedTimerDiv);

let timeLeft = 40 * 60; // 40 минути в секунди
let shuffledQuestions; // Да бъде деклариран тук за повторно използване
let timer; // Променлива за таймера, за да можем да го спираме

// Функция за започване на нов тест
function startTest() {
    // Шифроваме въпросите и избираме 30
    shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 30);

    // Рендериране на въпросите в формата
    form.innerHTML = ''; // Изчистваме старите въпроси
    shuffledQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        questionDiv.innerHTML = `
    <p><strong>${index + 1}. ${q.question}</strong></p>
    ${q.image ? `<img src="${q.image}" alt="Question Image" style="max-width: 100%; margin: 10px 0;">` : ""}
    <div class="answers">
        ${Object.keys(q.options).map(key => `
            <label>
                <input type="${Array.isArray(q.correct) ? 'checkbox' : 'radio'}" name="question-${index}" value="${key}" id="question-${index}-${key}">
                <label for="question-${index}-${key}">${key}: ${q.options[key]}</label>
            </label>
        `).join('')}
    </div>
`;

    
        form.appendChild(questionDiv);
    });

    // Таймер
    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60); // минути
        const seconds = timeLeft % 60; // секунди
        timerDiv.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`; // Обновяваме времето в UI
        timeLeft--; // Намаляваме времето с 1 секунда

        // Ако времето изтече, спираме таймера и подаваме теста
        if (timeLeft < 0) {
            clearInterval(timer);
            submitTest();
        }
    }, 1000); // Инкрементираме всяка секунда
}

// Функция за изпращане на теста
function submitTest() {
    clearInterval(timer);
    
    const answers = new FormData(form);
    let score = 0;

    shuffledQuestions.forEach((q, index) => {
        const userAnswers = answers.getAll(`question-${index}`);
        const correctAnswer = q.correct;
        const questionDiv = form.children[index];

        const isCorrect = Array.isArray(correctAnswer)
            ? correctAnswer.sort().toString() === userAnswers.sort().toString()
            : userAnswers[0] === correctAnswer;

        if (isCorrect) {
            score++;
            questionDiv.classList.add('correct');
        } else {
            questionDiv.classList.add('incorrect');
            const correctDiv = document.createElement('div');
            correctDiv.classList.add('correct-answer');
            correctDiv.textContent = `Правилен отговор: ${Array.isArray(correctAnswer) ? correctAnswer.join(', ') : correctAnswer}`;
            questionDiv.appendChild(correctDiv);
        }

        // Деактивиране на радио бутоните/чекбоксовете
        const inputs = questionDiv.querySelectorAll('input');
        inputs.forEach(input => {
            input.disabled = true;
        });
    });

    resultDiv.innerHTML = `<p>Your score is ${score} out of ${shuffledQuestions.length}</p>`;
    submitBtn.disabled = true; // Деактивираме бутона за изпращане след подаването

    // Показваме бутона за нов тест
    newTestBtn.style.display = 'block';
}

// Събитие за натискане на бутона за нов тест
newTestBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Изчистваме предишните въпроси и резултати
    form.innerHTML = '';
    resultDiv.innerHTML = '';
    timeLeft = 40 * 60; // Нулираме времето на 40 минути
    submitBtn.disabled = false; // Рестартираме бутона за изпращане

    newTestBtn.style.display = 'none'; // Скриваме бутона за нов тест

    startTest(); // Стартираме новия тест
});

// Събитие за натискане на бутона submit
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submitTest();
});

// Начало на теста при зареждане на страницата
startTest();

// Обработчик за бутоните за смяна на темата
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});