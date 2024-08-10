import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    const [mode, setMode] = React.useState('light');

    const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
                mode: mode,
            },
        }),
        [mode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </ThemeProvider>
    );
};

export default App;
