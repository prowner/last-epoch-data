import { Ailment } from '../types/Ailment';
import { ModifierType } from '../types/ModifierType';
import { Property } from '../types/Property';
import { Tags } from '../types/Tags';

type OtherStat = {
  value: number;
  property: Exclude<Property, Property.AILMENT_CHANCE>;
  tags: Tags;
  specialTags: number;
  modifierType: ModifierType;
};

type AilmentStat = {
  value: number;
  property: Property.AILMENT_CHANCE;
  tags: Tags;
  specialTags: Ailment;
  modifierType: ModifierType;
};

type Stat = OtherStat | AilmentStat;

type TreeNodeStats = Stat[];

type Trees = {
  [skillTreeId: string]: {
    [nodeId: string]: TreeNodeStats;
  };
};

const trees: Trees = {
  fi9: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.33,
    },
  ],
  3: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.FIRE,
      value: 0.1,
    },    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.LIGHTNING,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.015,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.DOT,
      value: 0.1,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  17: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.FIRE,
      value: 0.03,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  26: [
    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.09,
    },
  ],
  27: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.FireResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20x,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  23: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.7,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.LIGHTNING,
      value: 0.5,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
},
  en6: {
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  6: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  7: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  9: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.14,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  13: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  17: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  24: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  25: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -3,
    },    {
      property: Property.DamageTakenAsCold,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  29: [
    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  30: [
    {
      property: Property.LightningResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.4,
    },
  ],
  34: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
},
  fs11: {
  2: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [

  ],
  4: [

  ],
  5: [

  ],
  6: [

  ],
  8: [

  ],
  10: [

  ],
  13: [

  ],
  14: [

  ],
  15: [

  ],
  17: [

  ],
  7: [

  ],
  9: [

  ],
  11: [

  ],
  12: [

  ],
  16: [

  ],
},
  wo42: {
  2: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  12: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  16: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  19: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.StunImmunity,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.MELEE,
      value: 0.05,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.SlowRetaliationChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
},
  sw43: {
  3: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  6: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.85,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  tb47: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  14: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  19: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  20: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.45,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  to50: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.22,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  16: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  18: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  19: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  22: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  ms26: {
  2: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  6: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  7: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  13: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  15: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  18: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  19: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  21: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  22: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  23: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  24: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  25: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.8,
    },
  ],
  10: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
},
  fl13: {
  2: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.MELEE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  10: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  18: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  26: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  me27: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  3: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  9: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  17: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  26: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 70,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  23: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  lb23il: {
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  4: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  11: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  12: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  32: [
    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -10,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 46,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  is58: {
  3: [

  ],
  4: [

  ],
  5: [

  ],
  7: [

  ],
  8: [

  ],
  9: [

  ],
  10: [

  ],
  11: [

  ],
  13: [

  ],
  14: [

  ],
  15: [

  ],
  16: [

  ],
  2: [

  ],
  6: [

  ],
  12: [

  ],
},
  gl14: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  16: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  17: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  18: [
    {
      property: Property.Mana,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  22: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.8,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
},
  be36ar: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  12: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  14: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  17: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ReducedBonusDamageTakenFromCrits,,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  18: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 75,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  20: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.24,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  22: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  25: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.StunImmunity,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  th39: {
  4: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  5: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  10: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  12: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.17,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  20: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  21: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.PhysicalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  24: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.ColdResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
},
  st31et: {
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  4: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  12: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  18: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  22: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 160,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  24: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.65,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  2: [
    {
      property: Property.MaximumCompanions,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  27: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.DOT,
      value: 0.02,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  30: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  31: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  32: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.POISON,
      value: 0.15,
    },
  ],
},
  so35a: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  7: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -26,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.9,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.35,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 80,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  16: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  17: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  er6no: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  27: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  28: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  vo54: {
  2: [

  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  8: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  9: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  14: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  19: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.4,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  22: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  25: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  27: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  sp38: {
  3: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  12: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  13: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  14: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.CritAvoidance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },
  ],
  15: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },    {
      property: Property.PhysicalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  18: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  24: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  26: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  27: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 200,
    },
  ],
  28: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.PercentReflect,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
},
  va53st: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  13: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  27: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -6,
    },    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },
  ],
  6: [
    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.BlockEffectiveness,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },
  ],
  25: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  17: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  vr53sl: {
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.22,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  8: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.VOID,
      value: 0.01,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  12: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 120,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  sr31hu: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  11: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  13: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.24,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  19: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.45,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  23: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
},
  ht16aw: {
  2: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  5: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  10: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  14: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
},
  gs15de: {
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  5: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  19: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  30: [
    {
      property: Property.CritAvoidance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  es6ai: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  6: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  9: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  19: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  20: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
},
  do5vr: {
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  4: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.Vitality,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  12: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  13: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  14: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },
  ],
  15: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.VOID,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.VoidResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 80,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.4,
    },
  ],
},
  ab0lh: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  6: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.Attunement,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  32: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
},
  ss37kl: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  5: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  6: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.BOW,
      value: 0.08,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.75,
    },
  ],
  22: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.PhysicalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.1,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  3: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  rb31pl: {
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  14: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  15: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  16: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  17: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  18: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0,
    },
  ],
  19: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  20: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  21: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.015,
    },
  ],
  31: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  22: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
},
  sf31rc: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  6: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.015,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },
  ],
  12: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
},
  bp2nk: {
  3: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  10: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.13,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  13: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  14: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  15: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.14,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  21: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  23: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  27: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.33,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  sw42ih: {
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.45,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.45,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.07,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  9: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  15: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  18: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  20: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  22: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  23: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.POISON,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  25: [
    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.13,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  30: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.34,
    },
  ],
  10: [
    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.11,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.11,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  ws54hm: {
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  14: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  17: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  18: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  19: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.9,
    },
  ],
  30: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
},
  hs18gu: {
  2: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  5: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  8: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.35,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },
  ],
  16: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 13,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  20: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
},
  lu25ng: {
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  2: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  33: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  34: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  35: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
},
  fr11mv: {
  2: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.12,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.65,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.3,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.3,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.FIRE, DOT,
      value: 0.12,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  17: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.17,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  21: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  26: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.35,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
},
  bh2: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 18,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  14: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.9,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 35,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  bg36nl: {
  2: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.FireResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  9: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ColdResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 9500,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  17: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 80,
    },
  ],
  18: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 13,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  23: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  24: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 500,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.35,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.45,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  26: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
},
  sw31a: {
  2: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.16,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.16,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  11: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  17: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  20: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },    {
      property: Property.ColdResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  22: [
    {
      property: Property.ColdResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  sa36oh: {
  2: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.ColdResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ChillRetaliationChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  5: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  6: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 90,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  10: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.33,
    },
  ],
  12: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.65,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  20: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.MoreFreezeRatePerStackOfChill,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  21: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  13: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.33,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
},
  vm53dx: {
  2: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  3: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  5: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  7: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.LightningResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.FireResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  11: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  13: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.07,
    },
  ],
  14: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  19: [
    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  26: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  22: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  27: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  28: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  4: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.ColdResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  15: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  ha84: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  11: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
},
  md26kh: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -100,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -100,
    },
  ],
  10: [
    {
      property: Property.NegativeNecroticResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -100,
    },
  ],
  11: [
    {
      property: Property.NegativePoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -100,
    },
  ],
  12: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -100,
    },
  ],
  15: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },
  ],
  16: [
    {
      property: Property.Vitality,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
},
  te44: {
  5: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.ColdResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
  13: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  15: [
    {
      property: Property.FireResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.LightningResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.StunAvoidance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  17: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  24: [
    {
      property: Property.StunImmunity,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  3: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
  4: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  re82ke: {
  2: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  3: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  4: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  5: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  10: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  19: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  20: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  st38ml: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  9: [
    {
      property: Property.LightningResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  12: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  13: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  15: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
},
  ah443: {
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  4: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  5: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  12: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Endurance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  13: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  14: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  19: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  20: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  21: [
    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  23: [
    {
      property: Property.BlockEffectiveness,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  24: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  22: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 400,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  16: [
    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
},
  sm87r4: {
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  11: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  14: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  26: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  27: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  30: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
},
  ts50pl: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.08,
    },
  ],
  23: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  25: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },
  ],
  26: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  6: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
},
  ad0ry: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -40,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.01,
    },    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.01,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  30: [
    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  st31io: {
  3: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  14: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -4,
    },
  ],
  16: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  17: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  18: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  25: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },
  ],
  5: [
    {
      property: Property.StunAvoidance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.AllResistances,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
},
  av75ch: {
  5: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  19: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 80,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  rf1azz: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  3: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  4: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  11: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  18: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  21: [
    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  22: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  26: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  31: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  24: [
    {
      property: Property.NecroticResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  33: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  34: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
},
  sndr1: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  12: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  16: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  18: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  29: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  30: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.PHYSICAL,
      value: 0.03,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
},
  wb8fo: {
  2: [
    {
      property: Property.Endurance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.EnduranceThreshold,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  5: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  8: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  22: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.12,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  33: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  34: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
},
  sm4g: {
  1: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  13: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  15: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  20: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  23: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  24: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.CritAvoidance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.3,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
},
  ss3tre: {
  2: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  9: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  19: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  20: [
    {
      property: Property.ColdResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  21: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  24: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.9,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  fs3e3: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  2: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  12: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.75,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  30: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.FIRE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.35,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  sf37: {
  2: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  9: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },
  ],
  14: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.PhysicalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  fe8at: {
  1: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.24,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  7: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  20: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.85,
    },
  ],
  21: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  23: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -3,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  ts85i: {
  21: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  3: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -4,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.COLD,
      value: 1,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -4,
    },
  ],
  23: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -4,
    },
  ],
  25: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.1,
    },
  ],
  29: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  33: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  34: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  35: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  rs31hi: {
  1: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  3: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.BlockEffectiveness,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  6: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  7: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -3,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  8: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.BlockEffectiveness,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  16: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.PhysicalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.PercentReflect,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  sf5rd: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  11: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  13: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.PercentReflect,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  33: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  34: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  35: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  sc36pi: {
  1: [
    {
      property: Property.PhysicalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  2: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  11: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.ShockRetaliationChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  18: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  25: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.35,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  pa67ju: {
  1: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  22: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  23: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  25: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.11,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  28: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
},
  sb44eQ: {
  1: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  6: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  st47ic: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.0025,
    },
  ],
  9: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  25: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  mas54: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  9: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  12: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  14: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
},
  dig5: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  9: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  14: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  28: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.6,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  ma6hdr: {
  1: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  3: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  5: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  7: [
    {
      property: Property.PercentReflect,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.StunImmunity,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.08,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.08,
    },
  ],
  2: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  8: [
    {
      property: Property.PercentReflect,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  srtor: {
  2: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 80,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  14: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  si4lgl: {
  32: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  2: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  7: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  8: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  12: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.EnduranceThreshold,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  16: [
    {
      property: Property.FireResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },    {
      property: Property.VoidResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  19: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  20: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.BlockEffectiveness,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  3: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  10: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 200,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  fw3d: {
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  7: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 200,
    },
  ],
  8: [
    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.BlockEffectiveness,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 500,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  15: [
    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  17: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  18: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  19: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  21: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  25: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  27: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 150,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  29: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  33: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 48,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  34: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  eq5s: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  9: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  31: [
    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 16,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 80,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
},
  arcas: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  5: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  7: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  14: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.12,
    },
  ],
  19: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.Mana,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },
  ],
},
  eb5656: {
  2: [
    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.PoisonResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  5: [
    {
      property: Property.StunImmunity,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  8: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  16: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  23: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  30: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  26: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  st4th: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  4: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  8: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.EnduranceThreshold,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.12,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  17: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  dl73: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  7: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  12: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 18,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.AllResistances,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  18: [
    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  19: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.21,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  23: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  24: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Mana,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  32: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  33: [
    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  an0my: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  22: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  24: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  aacfl: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  20: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  24: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
},
  mush9: {
  1: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  5: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },
  ],
  9: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  14: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  24: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.8,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.55,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  ib5g3: {
  2: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  3: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  9: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.COLD,
      value: 0.3,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.COLD,
      value: -0.1,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.13,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.4,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  32: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  srk21: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  13: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  15: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  22: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  28: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  29: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.17,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
},
  sp5g2: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  13: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  15: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 13,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 13,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  ds34l: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.NecroticResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1000,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  8: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.StunAvoidance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.003,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 35,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.28,
    },
  ],
  22: [
    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.6,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },
  ],
},
  bc53: {
  1: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  11: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 500,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  25: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  27: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  29: [
    {
      property: Property.Thorns,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.4,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  8: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
},
  shiif: {
  2: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.Dexterity,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  5: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  17: [
    {
      property: Property.PotionSlots,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  27: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  32: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  13: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  aa710: {
  2: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.AllResistances,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  5: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.PercentReflect,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  21: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.07,
    },
  ],
  22: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  28: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  31: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  33: [
    {
      property: Property.AllResistances,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  ds4d3: {
  2: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  3: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  10: [
    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 18,
    },
  ],
  16: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.HealthRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
},
  is40: {
  1: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.6,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  6: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.FIRE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.24,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  16: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.8,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.72,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.85,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  flur3: {
  2: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  6: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.PhysicalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.ElementalResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  16: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  22: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  23: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  24: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  25: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  26: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
},
  f1b4d: {
  1: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  6: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  8: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  10: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.FireResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  12: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  14: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  15: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.09,
    },
  ],
  21: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  28: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  sb4h: {
  1: [
    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.0025,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  11: [
    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.BlockEffectiveness,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.BlockChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.PotionHealth,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -3,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  29: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  30: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  pun22: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.03,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  22: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
},
  deeco: {
  1: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  7: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.PercentReflect,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  12: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  18: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  dacn33: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 75,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  16: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  18: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  24: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  26: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  31: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  ba1574: {
  2: [
    {
      property: Property.Mana,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  6: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.4,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 80,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  27: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  31: [
    {
      property: Property.PotionSlots,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  9: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 300,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  dagg3: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  3: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.002,
    },
  ],
  11: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  13: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.9,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  16: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  19: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
},
  mira59: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  8: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  18: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.2,
    },
  ],
  19: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.CritAvoidance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 200,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  detar: {
  2: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  3: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  8: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.12,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  32: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  34: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
},
  smbmb: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  13: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.GlancingBlowChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  34: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },
  ],
  23: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
},
  exvol8: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.GlancingBlowChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 50,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.06,
    },
  ],
  14: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  32: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  17: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  19: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  25: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -40,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  cstri: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  7: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  10: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 9,
    },
  ],
  15: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  21: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.FireResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  26: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  dqv5: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  5: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  10: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  16: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  19: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.POISON,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  22: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  31: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.BOW,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  32: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.PHYSICAL,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4m,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  sync5: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  9: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  12: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  15: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },
  ],
  21: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  22: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  25: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  27: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
},
  su5g3: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  16: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  17: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  25: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  wc57: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  7: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  13: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 100,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.14,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  33: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
},
  svz81: {
  1: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.33,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  20: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  21: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.004,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  27: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  29: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  32: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  ssc50: {
  1: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  5: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.LightningResistance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  11: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  18: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  23: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 75,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  24: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 75,
    },
  ],
  25: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.Intelligence,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  31: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.06,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  v01cv: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  12: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  17: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  23: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2.75,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  multis: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  3: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.BlockEffectiveness,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },
  ],
  4: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 600,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  16: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.03,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  javeli: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2.5,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  16: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -3,
    },
  ],
  17: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -5,
    },
  ],
  18: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  19: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.EnduranceThreshold,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  23: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  33: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  35: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  sbf4m: {
  34: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  16: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  25: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  35: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  36: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
},
  uph41: {
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 16,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  7: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  10: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  13: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.EnduranceThreshold,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.14,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.PHYSICAL,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  28: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
},
  ub5d9: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Mana,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.8,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 24,
    },
  ],
  25: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
},
  fb8fe: {
  1: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 25,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  24: [
    {
      property: Property.Mana,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaSpentGainedAsWard,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  27: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20s,
    },
  ],
},
  gy2dm: {
  1: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.14,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.AllResistances,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  22: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
},
  fr4wl: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  5: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  19: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  22: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 200,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
},
  fl71ds: {
  2: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.09,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.1,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.1,
    },
  ],
  6: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.06,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 30,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 60,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.25,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  18: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 24,
    },    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  23: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
},
  rn7iv: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.12,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.ManaSpentGainedAsWard,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  13: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.025,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  21: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.45,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  29: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  34: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
},
  frc87w: {
  1: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  2: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  4: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  8: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.14,
    },
  ],
  12: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },
  ],
  17: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.9,
    },
  ],
  30: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
},
  ch4bo: {
  1: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.09,
    },    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  15: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.6,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 13,
    },
  ],
  19: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.13,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  21: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  23: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.06,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  24: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  26: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  gh0fl: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  3: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.002,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.ChannelCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  12: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1000,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.CurrentHealthDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  23: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  24: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.15,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  25: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  27: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.14,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.14,
    },
  ],
  28: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  29: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  pr5fm: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  5: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.13,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.14,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.Armour,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  15: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  16: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.07,
    },
  ],
  17: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  25: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  30: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -5,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  ch0fs: {
  2: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -4,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  13: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.EnduranceThreshold,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.HealthLeech,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.5,
    },
  ],
  18: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },
  ],
  20: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  24: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3.5,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  28: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  30: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  falc0: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  1: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  8: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  9: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  15: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  16: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  17: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  18: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.05,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  28: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  29: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 35,
    },
  ],
},
  aa989: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 34#,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  11: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  15: [
    {
      property: Property.ManaRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  16: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  17: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },
  ],
  20: [
    {
      property: Property.DodgeRating,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.02,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  29: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  31: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  33: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
},
  db992: {
  2: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  32: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 18,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },    {
      property: Property.CriticalMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  9: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.IncreasedStunDuration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.25,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  22: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  25: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  27: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  28: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  29: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -4,
    },
  ],
  30: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
},
  ex4tp: {
  2: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  3: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.5,
    },
  ],
  4: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.6,
    },
  ],
  5: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.25,
    },
  ],
  6: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.BOW,
      value: 1,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.35,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.35,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  12: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 15,
    },    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  15: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  16: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.3,
    },
  ],
  17: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },
  ],
  18: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.THROWING,
      value: 1,
    },
  ],
  19: [
    {
      property: Property.ManaEfficiency,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.THROWING,
      value: 0.04,
    },
  ],
  20: [
    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.ELEMENTAL,
      value: 0.03,
    },    {
      property: Property.Penetration,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.PHYSICAL,
      value: 0.03,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  21: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  25: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  26: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  27: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  29: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 11,
    },
  ],
  30: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  31: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.7,
    },
  ],
  22: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.04,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 12,
    },
  ],
},
  ne01t: {
  2: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  5: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  8: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.THROWING,
      value: 0.1,
    },
  ],
  9: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  11: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  12: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.15,
    },
  ],
  17: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  18: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  19: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  20: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },
  ],
  23: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  24: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 2,
    },    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  27: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  28: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.35,
    },
  ],
  29: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.12,
    },
  ],
  30: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  31: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
},
  ga2st: {
  2: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  3: [
    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.08,
    },
  ],
  4: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  6: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.06,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  8: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },
  ],
  9: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },
  ],
  10: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  11: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.08,
    },
  ],
  13: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  14: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.03,
    },
  ],
  15: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  16: [
    {
      property: Property.AttackSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.05,
    },
  ],
  17: [
    {
      property: Property.ManaGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  18: [
    {
      property: Property.IncreasedStunChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 10,
    },
  ],
  19: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  20: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.12,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  21: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  22: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },
  ],
  23: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  25: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  26: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 40,
    },
  ],
  27: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.2,
    },    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 5,
    },
  ],
  28: [
    {
      property: Property.FreezeRateMultiplier,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
  30: [
    {
      property: Property.CriticalChance,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.01,
    },
  ],
},
  hh7pa3: {
  1: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  2: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  3: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  4: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.1,
    },
  ],
  5: [
    {
      property: Property.AdaptiveSpellDamage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.005,
    },
  ],
  6: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  7: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.4,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  8: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  9: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  10: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.15,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -2,
    },
  ],
  11: [
    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -5,
    },
  ],
  12: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  13: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },    {
      property: Property.WardRetention,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  14: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.18,
    },
  ],
  15: [
    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1,
    },
  ],
  16: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 4,
    },    {
      property: Property.ManaDrain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 8,
    },
  ],
  17: [
    {
      property: Property.WardRegen,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.1,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 3,
    },
  ],
  18: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 35,
    },
  ],
  19: [
    {
      property: Property.HealthGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 20,
    },
  ],
  20: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 1.1,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.65,
    },
  ],
  21: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  22: [
    {
      property: Property.Movespeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 6,
    },
  ],
  23: [
    {
      property: Property.IncreasedCooldownRecoverySpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.75,
    },
  ],
  24: [
    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.25,
    },
  ],
  26: [
    {
      property: Property.DamageTaken,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },
  ],
  28: [
    {
      property: Property.CastSpeed,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: -0.16,
    },    {
      property: Property.Damage,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.24,
    },    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.24,
    },    {
      property: Property.TODO,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.16,
    },
  ],
  30: [
    {
      property: Property.IncreasedHealing,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.Health,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.5,
    },    {
      property: Property.WardGain,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 0.8,
    },
  ],
  32: [
    {
      property: Property.None,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: ,
    },    {
      property: Property.ManaCost,
      modifierType: ModifierType.TODO,
      specialTags: 0,
      tags: TAGS.NONE,
      value: 7,
    },
  ],
},
}