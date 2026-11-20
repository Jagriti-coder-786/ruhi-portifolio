import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      theme: 'dark',
      activeSection: 'hero',
      selectedProjectId: null,
      liveProjectUrl: null,
      liveProjectTitle: null,
      developmentProjectId: null,
      setActiveSection: (activeSection) => set({ activeSection }),
      openCaseStudy: (projectId) => set({ activeSection: 'caseStudy', selectedProjectId: projectId }),
      openDevelopmentProject: (projectId) => set({
        activeSection: 'developmentProject',
        developmentProjectId: projectId,
      }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      
      projects: [],
      setProjects: (projects) => set({ projects }),
      
      showContactModal: false,
      setShowContactModal: (show) => set({ showContactModal: show }),
    }),
    {
      name: 'portfolio-store',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
)
