import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface SuggestionsProps {
    suggestions: { id: number, productName: string, imageUrl: string }[];
    activeSuggestionIndex: number;
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, activeSuggestionIndex }) => {
    const router = useRouter();

    const handleSuggestionClick = (suggestion: { id: number }) => {
        router.push(`/product/${suggestion.id}`);
    };

    return (
        <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto z-10">
            {suggestions.map((suggestion, index) => (
                <div
                    key={suggestion.id}
                    className={`p-2 flex items-center hover:bg-gray-200 cursor-pointer ${index === activeSuggestionIndex ? 'bg-gray-200' : ''}`}
                    onClick={() => handleSuggestionClick(suggestion)}
                >
                    <Image
                        src={suggestion.imageUrl}
                        alt={suggestion.productName}
                        width={40}
                        height={40}
                        className="mr-2"
                    />
                    {suggestion.productName}
                </div>
            ))}
        </div>
    );
};

// Suggestions.propTypes = {
//     suggestions: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         productName: PropTypes.string.isRequired,
//         imageUrl: PropTypes.string.isRequired,
//     })).isRequired,
//     activeSuggestionIndex: PropTypes.number.isRequired,
// };

export default Suggestions;
