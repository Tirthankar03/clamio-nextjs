'use client';
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/utils/productSlice';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import PropTypes from 'prop-types';
import { TopSellingproductData } from '@/constants/data';
import Suggestions from './Suggestions';

interface SearchBarProps {
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1); // Start with -1 to indicate no suggestion selected
    const [showSuggestions, setShowSuggestions] = useState(false); // State to control visibility of suggestions
    const inputRef = useRef<HTMLInputElement>(null); // Reference for input field
    const suggestionsRef = useRef<HTMLDivElement>(null); // Reference for suggestions box

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setActiveSuggestionIndex(-1); // Reset suggestion index when input changes
        setShowSuggestions(true); // Show suggestions when input changes
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputValue.trim() === '') return;
            if (activeSuggestionIndex === -1) {
                dispatch(setSearchQuery(inputValue));
                router.push(`/product/search?query=${encodeURIComponent(inputValue)}`); // Route to search page with query
            } else if (activeSuggestionIndex >= 0 && activeSuggestionIndex < filteredSuggestions.length) {
                const selectedSuggestion = filteredSuggestions[activeSuggestionIndex];
                router.push(`/product/${selectedSuggestion.id}`);
            }
            setShowSuggestions(false); // Hide suggestions on enter
        } else if (e.key === 'ArrowDown' && filteredSuggestions.length > 0) {
            setActiveSuggestionIndex(prevIndex => Math.min(prevIndex + 1, filteredSuggestions.length - 1));
        } else if (e.key === 'ArrowUp' && filteredSuggestions.length > 0) {
            setActiveSuggestionIndex(prevIndex => Math.max(prevIndex - 1, -1));
        }
    };

    const filteredSuggestions = inputValue
        ? TopSellingproductData.filter(product =>
            product.productName.toLowerCase().includes(inputValue.toLowerCase())
        )
        : [];

    useEffect(() => {
        // Focus on input field when suggestions are shown
        if (filteredSuggestions.length > 0 && inputRef.current) {
            inputRef.current.focus();
        }
    }, [filteredSuggestions]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                suggestionsRef.current &&
                !suggestionsRef.current.contains(event.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setShowSuggestions(false); // Hide suggestions when clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full md:w-3/4 mx-auto">
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                placeholder={placeholder}
                className="w-full py-2 md:py-3 pl-10 pr-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {inputValue && showSuggestions && (
                <div ref={suggestionsRef}>
                    <Suggestions
                        suggestions={filteredSuggestions}
                        activeSuggestionIndex={activeSuggestionIndex}
                    />
                </div>
            )}
        </div>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
