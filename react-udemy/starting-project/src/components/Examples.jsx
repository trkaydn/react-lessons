import { useState } from 'react'; //react'tan gelen özellikker hook olarak adlandırılır.
import TabButton from "./TabButton";
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {

    //hook functions sadece component içinde yapılabilir. component içinde en üstte (top-level) olmalıdır.
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs ButtonsContainer="menu" buttons={    
                <menu>        
                <TabButton onClick={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
                <TabButton onClick={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onClick={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
                </menu>}>
                {tabContent}
            </Tabs>
        </Section>);
}