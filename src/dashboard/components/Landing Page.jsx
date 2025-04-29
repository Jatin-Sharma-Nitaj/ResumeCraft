import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useUser, UserButton } from '@clerk/clerk-react';
import Footer from '@/Home/Footer';

export default function LandingPage() {
    const { isSignedIn } = useUser();
    const Features = [
        {
            title: '🔮 AI-Powered Summaries',
            desc: 'Generate professional resume summaries instantly using Gemini AI — no need to overthink your words.'
        },
        {
            title: '📥 Download & Share',
            desc: 'Export your resume as a high-quality PDF and share it effortlessly with recruiters or friends.'
        },
        {
            title: '⚡ Live Preview',
            desc: 'See your resume come to life in real-time as you type. What you see is exactly what you get.'
        }
    ]

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#fef9f9] via-[#e6f3ff] to-[#d8f5ff] text-gray-900">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e293b]"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Create Beautiful Resumes<br />
                    <span className="text-indigo-600">Effortlessly</span>
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Generate professional resumes with zero effort. Just fill the details with the Help of Gemini AI, and you're done.
                </motion.p>

                <motion.div
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {isSignedIn ? (
                        <div className="flex gap-4 items-center">
                            <Link to="/dashboard">
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg rounded-md shadow">
                                    Go to Dashboard
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <Link to="/auth/sign-in">
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg rounded-md shadow">
                                    Get Started
                                </Button>
                            </Link>
                        </>
                    )}
                    <Link to="/learnmore">
                        <Button variant="outline" className="px-6 py-3 text-lg border-gray-400 text-gray-700 hover:bg-gray-100">
                            Learn More
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 text-center">
                    {Features.map(({ title, desc }, i) => (
                        <motion.div
                            key={i}
                            className="bg-[#f0f9ff] p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 * i, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold text-xl mb-2 text-indigo-700">{title}</h3>
                            <p className="text-sm text-gray-600">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
                <Footer />
        </div>
    );
}
