import { getVivoNewSkin, type ThemeConfig } from "@telefonica/mistica";

const theme: ThemeConfig = {
  skin: getVivoNewSkin(),
  colorScheme: 'light',
  i18n: {
    locale: 'pt-BR',
    phoneNumberFormattingRegionCode: 'BR',
  },
};

export {theme};