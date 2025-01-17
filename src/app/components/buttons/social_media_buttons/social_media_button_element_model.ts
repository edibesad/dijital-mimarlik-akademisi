import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

class SocialMediaButtonElementModel {
  icon: IconDefinition;
  href: string;
  constructor(icon: IconDefinition, link: string) {
    this.icon = icon;
    this.href = link;
  }
}
export default SocialMediaButtonElementModel;
