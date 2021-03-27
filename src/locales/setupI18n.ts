import type { I18n, I18nOptions } from "vue-i18n";
import type { App } from "vue";

import { createI18n } from 'vue-i18n';

export let i18n: ReturnType<typeof createI18n>;

export async function setupI18n(app:App) {
    
}