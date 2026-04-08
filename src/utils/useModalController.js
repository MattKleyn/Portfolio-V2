import { useState } from 'react';

function useModalController() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() { 
        console.log("toggling", isModalOpen);
        setIsModalOpen((prev) => !prev)
    };

    return {
        isModalOpen,
        toggleModal
    };
}

export default useModalController;