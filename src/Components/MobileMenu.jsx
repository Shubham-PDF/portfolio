import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ navLinks = [], scrollToSection, onClose, isOpen }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-white/90 backdrop-blur-lg"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* content */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={onClose}
              className="mt-8 px-6 py-3 rounded-lg border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition"
            >
              Close Menu
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;
