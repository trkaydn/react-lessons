import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
    return (
    <section id="core-concepts">
        <h2>Core Concepts
            <ul>
                {
                    CORE_CONCEPTS.map((concept) => <CoreConcept {...concept} key={concept.title} />)
                }
            </ul>
        </h2>
    </section>);
}