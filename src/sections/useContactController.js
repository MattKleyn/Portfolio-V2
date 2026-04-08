import { useState } from 'react';

function useContactController() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleContactModal() {
        setIsOpen((prev) => !prev);
    };

    return {
        isOpen,
        toggleContactModal,
    };
}

export default useContactController;