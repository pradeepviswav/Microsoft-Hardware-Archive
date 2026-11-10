import { Product } from "../types";

/** Product lines sit inside broad navigation categories; generations remain individual records. */
export function productFamily(product: Product): string {
  const name = product.name;
  const rules: [RegExp, string][] = [
    [/Surface Pro/, "Surface Pro"],
    [/Surface Laptop Studio/, "Surface Laptop Studio"],
    [/Surface Laptop Go/, "Surface Laptop Go"],
    [/Surface Laptop SE/, "Surface Laptop SE"],
    [/Surface Laptop Ultra/, "Surface Laptop Ultra"],
    [/Surface Laptop/, "Surface Laptop"],
    [/Surface Book/, "Surface Book"],
    [/Surface Studio/, "Surface Studio"],
    [/Surface Go/, "Surface Go"],
    [/Surface Duo/, "Surface Duo"],
    [/Surface Hub/, "Surface Hub"],
    [/^Surface (RT|2|3)$/, "Surface RT and Surface tablets"],
    [/IntelliMouse/i, "IntelliMouse"],
    [/Natural.*Keyboard/i, "Natural keyboards"],
    [/Sculpt/, "Sculpt peripherals"],
    [/SideWinder/i, "SideWinder"],
    [/Arc.*Mouse/, "Arc mice"],
    [/LifeCam/, "LifeCam"],
    [/LifeChat/, "LifeChat"],
    [/Lumia/, "Lumia"],
    [/Kin (ONE|TWO)/, "Kin"],
    [/HoloLens/, "HoloLens"],
    [/Kinect/, "Kinect sensors"],
    [/Microsoft Band/, "Microsoft Band"],
    [/Zune/, "Zune"],
    [/Broadband/, "Broadband Networking"],
    [/Xbox Adaptive/, "Xbox adaptive inputs"],
    [/Xbox Elite/, "Xbox Elite controllers"],
    [/Xbox Wireless Controller/, "Xbox wireless controllers"],
    [/Xbox Wireless Headset/, "Xbox audio"],
    [/Xbox Series/, "Xbox Series X|S"],
    [/Xbox One/, "Xbox One"],
    [/Xbox 360/, "Xbox 360"],
    [/^Xbox$/, "Original Xbox"],
    [/Microsoft Adaptive/, "Microsoft Adaptive Accessories"],
    [/Surface Headphones/, "Surface Headphones"],
    [/Surface Earbuds/, "Surface Earbuds"],
    [/Dock/, "Docks and connectivity"],
  ];
  return rules.find(([pattern]) => pattern.test(name))?.[1] ?? product.category;
}
