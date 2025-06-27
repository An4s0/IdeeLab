"use client";
import { useState } from "react";
import { AnimatePresence, motion, easeIn, easeOut } from "framer-motion";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

export default function Search({
  searchModal,
  setSearchModal,
  searchInputRef,
}: {
  searchModal: boolean;
  setSearchModal: (value: boolean) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const searchModalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.15,
        ease: easeIn,
      },
    },
  };
  if (searchModal) {
    return (
      <AnimatePresence>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSearchModal(false);
              }
            }}
          >
            <motion.div
              className="w-full max-w-2xl bg-background rounded-xl shadow-2xl border border-outline overflow-hidden"
              variants={searchModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center px-4 py-4 border-b border-outline/30">
                <AiOutlineSearch className="w-5 h-5 text-subtle mr-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder-subtle focus:outline-none text-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchModal(false)}
                  className="p-1 rounded-lg hover:bg-outline/20 transition-colors"
                >
                  <AiOutlineClose className="w-5 h-5 text-subtle cursor-pointer" />
                </motion.button>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {searchQuery.length > 0 ? (
                  <div className="p-4">
                    <div className="text-sm text-subtle mb-4">
                      Search results for &quot;{searchQuery}&quot;
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg hover:bg-outline/10 transition-colors cursor-pointer">
                        <div className="font-medium text-foreground mb-1">
                          Sample Idea 1
                        </div>
                        <div className="text-sm text-subtle">
                          A brief description of the idea...
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-outline/10 transition-colors cursor-pointer">
                        <div className="font-medium text-foreground mb-1">
                          Sample Idea 2
                        </div>
                        <div className="text-sm text-subtle">
                          A brief description of the idea...
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-outline/10 transition-colors cursor-pointer">
                        <div className="font-medium text-foreground mb-1">
                          Sample Idea 3
                        </div>
                        <div className="text-sm text-subtle">
                          A brief description of the idea...
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-outline/10 transition-colors cursor-pointer">
                        <div className="font-medium text-foreground mb-1">
                          Sample Idea 4
                        </div>
                        <div className="text-sm text-subtle">
                          A brief description of the idea...
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <AiOutlineSearch className="w-12 h-12 text-subtle mx-auto mb-4" />
                    <div className="text-foreground font-medium mb-2">
                      Search Ideas
                    </div>
                    <div className="text-sm text-subtle">
                      Start typing to search through ideas and categories
                    </div>
                  </div>
                )}
              </div>

              <div className="px-4 py-3 border-t border-outline/30 bg-outline/5">
                <div className="flex items-center justify-between text-xs text-subtle">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <kbd className="px-2 py-1 bg-outline/20 rounded text-xs">
                        esc
                      </kbd>
                      <span>to close</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>Search by</span>
                    <span className="font-medium">IdeeLab</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
      </AnimatePresence>
    );
  }
}
