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
  mush9: {
    1: [],
    2: [
      {
        property: Property.DAMAGE,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.NONE,
        value: 55,
      },
      {
        property: Property.ATTACK_SPEED,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.NONE,
        value: -30,
      },
    ],
    3: [
      {
        property: Property.AILMENT_CHANCE,
        modifierType: ModifierType.ADDED,
        specialTags: Ailment.SHRED_ARMOR,
        tags: Tags.NONE,
        value: 25,
      },
    ],
    4: [
      //TODO: not mapped -> Autofire Chance On Bow Attack
      {
        property: Property.STUN_CHANCE,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 100,
      },
      {
        property: Property.MANA_COST,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 100,
      },
    ],
    5: [
      {
        property: Property.ATTACK_SPEED,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 5,
      },
      {
        property: Property.AILMENT_CHANCE,
        modifierType: ModifierType.INCREASED,
        specialTags: Ailment.HASTE,
        tags: Tags.NONE,
        value: 5,
      },
    ],
    6: [
      {
        property: Property.DAMAGE,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.CLOSE_ENEMY,
        value: 25,
      },
      {
        property: Property.DAMAGE,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.FAR_ENEMY,
        value: -25,
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
        property: Property.ATTACK_SPEED,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 5,
      },
    ],
    10: [
      //TODO: not mapped -> Maximum Enemies Pierced
    ],
    11: [
      {
        property: Property.CRIT_MULTIPLIER,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 15,
      },
    ],
    12: [
      {
        property: Property.DAMAGE,
        modifierType: ModifierType.MORE,
        specialTags: 0,
        tags: Tags.NOT_MOVED_1S,
        value: 10,
      },
    ],
    13: [
      {
        property: Property.AILMENT_CHANCE,
        modifierType: ModifierType.INCREASED,
        specialTags: Ailment.HASTE,
        tags: Tags.NONE,
        value: 25,
      },
    ],
    14: [
      {
        property: Property.CRIT_CHANCE,
        modifierType: ModifierType.INCREASED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 75,
      },
    ],
    15: [
      //TODO: not mapped -> Extra Arrows
      {
        property: Property.MANA_COST,
        modifierType: ModifierType.ADDED,
        specialTags: 0,
        tags: Tags.NONE,
        value: 4,
      },
    ],
  },
};
