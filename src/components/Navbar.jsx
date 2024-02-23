import React from 'react';
import Select from 'react-select';
import '../Styles/Navbar.css';

const Navbar = ({ userLang, setUserLang, userTheme,
    setUserTheme, fontSize, setFontSize }) => {
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python3", label: "Python" },
        { value: "java", label: "Java" },
        { value: "cpp14", label: "C++ 14" },
        { value: "cpp17", label: "C++ 17" },
        { value: "csharp", label: "C#" },
        { value: "go", label: "GO Lang" },
        { value: "kotlin", label: "Kotlin" },
        { value: "nodejs", label: "NodeJS" },
        { value: "php", label: "PHP" },
        { value: "python2", label: "Python 2" },
        { value: "r", label: "R Language" },
        { value: "rust", label: "RUST" },

    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]
    return (
        <div className="navbar">
            <h1>All in one Code Compiler</h1>
            <Select options={languages} value={userLang}
                onChange={(e) => setUserLang(e.value)}
                placeholder={userLang} />
            <Select options={themes} value={userTheme}
                onChange={(e) => setUserTheme(e.value)}
                placeholder={userTheme} />
            <label>Font Size</label>
            <input type="range" min="18" max="30"
                value={fontSize} step="2"
                onChange={(e) => { setFontSize(e.target.value) }} />
        </div>
    )
}

export default Navbar;
