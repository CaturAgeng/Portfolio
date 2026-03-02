/**
 * Custom hook for smooth scrolling to a section by ID
 * Usage: const scrollToSection = useScrollToSection();
 *        scrollToSection('projects');
 */
export function useScrollToSection() {
  return (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
}
