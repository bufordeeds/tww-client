//item images...yeah I know.
import GarlicFries from "../item-images/garlic-fries.jpg";
import FrenchFries from "../item-images/french-fries.jpg";
import Tots from "../item-images/tots.jpg";
import Ranch from "../item-images/ranch.jpg";
import BlueCheese from "../item-images/blue-cheese.jpg";
import FivePieceHolySchnikes from "../item-images/5-piece-holy-schnikes.jpg";
import FourPieceBonelessHolySchnikes from "../item-images/5-piece-holy-schnikes.jpg";
import FivePieceBuffalo from "../item-images/5-piece-buffalo.jpg";
import FourPieceBonelessBuffalo from "../item-images/5-piece-buffalo.jpg";
import FivePieceRanchOnFire from "../item-images/5-piece-ranch-on-fire.jpg";
import FourPieceBonelessRanchOnFire from "../item-images/5-piece-ranch-on-fire.jpg";
import FivePieceSpicyPineapple from "../item-images/garlic-parm-lemon-pepper-spicy-pineapple.jpg";
import FourPieceBonelessSpicyPineapple from "../item-images/garlic-parm-lemon-pepper-spicy-pineapple.jpg";
import FivePieceOG from "../item-images/5-piece-og.jpg";
import FourPieceBonelessOG from "../item-images/5-piece-og.jpg";
import FivePieceSweetChili from "../item-images/5-piece-sweet-chili.jpg";
import FourPieceBonelessSweetChili from "../item-images/5-piece-sweet-chili.jpg";
import FivePieceChiliLimon from "../item-images/5-piece-chili-limon.jpg";
import FourPieceBonelessChiliLimon from "../item-images/5-piece-chili-limon.jpg";
import FivePieceLemonPepper from "../item-images/garlic-parm-lemon-pepper-spicy-pineapple.jpg";
import FourPieceBonelessLemonPepper from "../item-images/garlic-parm-lemon-pepper-spicy-pineapple.jpg";
import FivePieceGarlicParm from "../item-images/garlic-parm-lemon-pepper-spicy-pineapple.jpg";
import FourPieceBonelessGarlicParm from "../item-images/4-piece-boneless-garlic-parm.jpg";
import RedTWWSnapback from "../item-images/red-black-snapback.jpg";
import BlackTWWSnapback from "../item-images/red-black-snapback.jpg";

const itemsObj = {
  GarlicFries,
  FrenchFries,
  Tots,
  Ranch,
  BlueCheese,
  FivePieceHolySchnikes,
  FourPieceBonelessHolySchnikes,
  FivePieceBuffalo,
  FourPieceBonelessBuffalo,
  FourPieceBonelessRanchOnFire,
  FivePieceOG,
  FourPieceBonelessOG,
  FivePieceSweetChili,
  FourPieceBonelessSweetChili,
  FivePieceChiliLimon,
  FourPieceBonelessChiliLimon,
  FivePieceLemonPepper,
  FourPieceBonelessLemonPepper,
  FivePieceGarlicParm,
  FourPieceBonelessGarlicParm,
  RedTWWSnapback,
  BlackTWWSnapback,
  FourPieceBonelessSpicyPineapple,
  FivePieceSpicyPineapple,
  FivePieceRanchOnFire
};

export const itemsArr = Object.keys(itemsObj).map(item => {
  return itemsObj[item];
});