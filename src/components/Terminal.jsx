import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Terminal.module.css';
import { processCommand } from '../utils/commands';
import UnifiedView from './views/UnifiedView';
import MatrixRain from './effects/MatrixRain';

const Terminal = () => {
    const [currentView, setCurrentView] = useState({ type: 'text', output: 'INITIALIZING SYSTEM...\n' });
    const [input, setInput] = useState('');
    const [showMatrix, setShowMatrix] = useState(true);
    const inputRef = useRef(null);

    // Initial greeting
    useEffect(() => {
        setTimeout(() => {
            setCurrentView({
                type: 'text',
                output: 'SYSTEM READY.\nAWAITING INPUT.\n\nType "bio" to initiate scan.'
            });
        }, 1000);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const command = input.trim();
            if (!command) return;

            const result = processCommand(command);

            if (result.type === 'clear') {
                setCurrentView({ type: 'text', output: '' });
            } else if (result.type === 'empty') {
                // do nothing
            } else if (result.type === 'effect' && result.effect === 'MATRIX_TOGGLE') {
                setShowMatrix(prev => !prev);
                setCurrentView({ type: 'text', output: 'VISUAL SYSTEM UPDATED.' });
            } else {
                setCurrentView(result);
            }

            setInput('');
        }
    };

    const renderContent = () => {
        switch (currentView.view) {
            case 'UNIFIED':
                return <UnifiedView data={currentView.data} />;
            default:
                return <div className={styles.outputLine}>{currentView.output || JSON.stringify(currentView)}</div>;
        }
    };

    return (
        <div className={`${styles.terminalContainer} ${styles.crt}`} onClick={() => inputRef.current?.focus()}>
            {showMatrix && <MatrixRain />}

            <div className={styles.viewport}>
                <div className={styles.scanline}></div>
                {renderContent()}
            </div>

            <div className={styles.commandBar}>
                <span className={styles.prompt}>USER@AGENCY:~$</span>
                <input
                    ref={inputRef}
                    type="text"
                    className={styles.inputInput}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    placeholder="ENTER COMMAND..."
                    spellCheck="false"
                    autoComplete="off"
                />
            </div>
        </div>
    );
};

export default Terminal;
