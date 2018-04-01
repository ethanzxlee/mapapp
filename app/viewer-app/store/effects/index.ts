import { RouterEffects } from './router.effects';
import { MapboxEffects } from './mapbox.effects';
import { SettingEffects } from './setting.effects';

export const effects: any[] = [RouterEffects, MapboxEffects, SettingEffects];

export * from './router.effects';
export * from './mapbox.effects';
export * from './setting.effects';
