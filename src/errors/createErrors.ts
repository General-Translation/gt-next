// ---- ERRORS ---- //

export const projectIdMissingError = 'General Translation: Project ID missing! Set projectId as GT_PROJECT_ID in the environment or by passing the projectId parameter to initGT(). Find your project ID: www.generaltranslation.com/dashboard.'

export const APIKeyMissingError = 'General Translation: API key is required for automatic translation! Create an API key: www.generaltranslation.com/dashboard/api-keys. (Or, turn off automatic translation by setting baseURL to an empty string.)'

export const remoteTranslationsError = 'General Translation: Error fetching remote translation.'

export const renderingError = 'General Translation: Rendering error.'

export const createStringTranslationError = (content: string, id?: string) => `gt-next string translation error. tx("${content}")${id ? ` with id "${id}"` : '' } failed.`

export const createRequiredPrefixError = (id: string, requiredPrefix: string) => 
    `You are using <GTProvider> with a provided prefix id: "${requiredPrefix}", but one of the children of <GTProvider> has the id "${id}". Change the <GTProvider> id prop or your dictionary structure to proceed.`

export const createAdvancedFunctionsError = (id: string, options?: Record<string, any>) => 
    `General Translation: You're trying to call a function in the server dictionary on the client-side, but functions can't be passed directly from server to client. ` +
        `Try including the function you want to call as a parameter in t(), like t("${id}", ${
            options ? JSON.stringify(options) : 'undefined'
                }, MyFunction)`

// ---- WARNINGS ---- //

export const usingDefaultsWarning = 'General Translation: Unable to access gt-next configuration. Using defaults.';

export const createNoEntryWarning = (id: string) => `gt-next: No dictionary entry found for id: "${id}"`
