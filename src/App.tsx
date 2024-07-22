import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { UserGuide } from './components/UserGuide';
import { ReviewsList } from './components/ReviewsList';
import { FAQSection } from './components/FAQ';
import { InterviewedUsers } from './components/InterviewedUsers';
import { FormHandler } from './components/FormHandler';
import { Footer } from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <UserGuide />
            <ReviewsList />
            <FAQSection />
            <InterviewedUsers />
            <FormHandler />
            <Footer />
        </Router>
    );
}

export default App;
