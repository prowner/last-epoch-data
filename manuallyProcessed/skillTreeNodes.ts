import { Ailment } from '../types/Ailment';
import { ModifierType } from '../types/ModifierType';
import { Property } from '../types/Property';
import { Tags } from '../types/Tags';

type OtherStat = {
  value: number;
  property: Exclude<Property, Property.AilmentChance | Property.IncreasedAilmentDuration>;
  tags: Tags;
  specialTags: number;
  modifierType: ModifierType;
};

type AilmentStat = {
  value: number;
  property: Property.AilmentChance | Property.IncreasedAilmentDuration;
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
  mush9: {
    1: [
      {
        property: Property.ManaCost,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: -0.1,
      },
    ],
    2: [
      {
        property: Property.Damage,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.NONE,
        value: 0.55,
      },
      {
        property: Property.AttackSpeed,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.NONE,
        value: -0.3,
      },
    ],
    3: [
      {
        property: Property.AilmentChance,
        modifierType: ModifierType.ADDED,
        specialTags: Ailment.ARMOURSHRED,
        tags: Tags.NONE,
        value: 0.25,
      },
    ],
    4: [
      //TODO: not mapped -> Autofire Chance On Bow Attack
      {
        property: Property.IncreasedStunChance,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 1,
      },
      {
        property: Property.ManaCost,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 1,
      },
    ],
    5: [
      {
        property: Property.AttackSpeed,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 0.05,
      },
      {
        property: Property.AilmentChance,
        modifierType: ModifierType.INCREASED,
        specialTags: Ailment.HASTE,
        tags: Tags.NONE,
        value: 0.05,
      },
    ],
    6: [
      {
        property: Property.Damage,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.CLOSE_ENEMY,
        value: 0.25,
      },
      {
        property: Property.Damage,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.FAR_ENEMY,
        value: -0.25,
      },
    ],
    7: [
      //TODO: not mapped -> Double Shot Every 8 Attacks
    ],
    8: [
      //TODO: not mapped -> Fewer Attacks Between Double Shots
    ],
    9: [
      {
        property: Property.AttackSpeed,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 0.05,
      },
    ],
    10: [
      //TODO: not mapped -> Maximum Enemies Pierced
    ],
    11: [
      {
        property: Property.CriticalMultiplier,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 0.15,
      },
    ],
    12: [
      {
        property: Property.Damage,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.NOT_MOVED_1S,
        value: 0.1,
      },
    ],
    13: [
      {
        property: Property.AilmentChance,
        modifierType: ModifierType.INCREASED,
        specialTags: Ailment.HASTE,
        tags: Tags.NONE,
        value: 0.25,
      },
    ],
    14: [
      {
        property: Property.CriticalChance,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 0.75,
      },
    ],
    15: [
      //TODO: not mapped -> Extra Arrows
      {
        property: Property.ManaCost,
        modifierType: ModifierType.ADDED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 4,
      },
    ],
    16: [
      {
        property: Property.Damage,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.NONE,
        value: 0.35,
      },
      //TODO: not mapped -> Cone Width
      //TODO: not mapped -> Maximum Projectiles
    ],
    17: [
      {
        property: Property.AilmentChance,
        modifierType: ModifierType.ADDED,
        specialTags: Ailment.POISON,
        tags: Tags.NONE,
        value: 0.5,
      },
      //TODO: not mapped -> Cannot Slow
    ],
    18: [
      //TODO: not mapped -> Cone Width
    ],
    19: [
      {
        property: Property.AilmentChance,
        modifierType: ModifierType.ADDED,
        specialTags: Ailment.SLOW,
        tags: Tags.NONE,
        value: 0.1,
      },
      //TODO: not mapped -> Cannot Slow
    ],
    20: [
      {
        property: Property.Damage,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.SLOWED_ENEMY,
        value: 0.2,
      },
    ],
    21: [
      //TODO: not mapped -> Slow Duration Per Dexterity
      //TODO: incorporate "per attribute"
      {
        property: Property.IncreasedAilmentDuration,
        modifierType: ModifierType.INCREASED,
        specialTags: Ailment.BLEED,
        tags: Tags.NONE,
        value: 0.02,
      },
    ],
    22: [
      //TODO: not mapped -> Slow And Chill Duration Reset Chance
    ],
    23: [
      //TODO: not mapped -> Knockback Chance
    ],
    24: [
      //TODO: not mapped -> Free When Out-Of-Mana
      //TODO: not mapped -> Maximum Projectiles
    ],
    26: [
      //TODO: not mapped -> Projectiles Can Hit The Same Target
      {
        property: Property.IncreasedStunChance,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 8,
      },
      {
        property: Property.Damage,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: -0.8,
      },
    ],
  },
};
