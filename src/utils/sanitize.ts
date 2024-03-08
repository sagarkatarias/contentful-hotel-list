import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Block, Inline } from "@contentful/rich-text-types";

export function sanitizeContent(content: Block | Inline) {
    if (content) {
      return documentToPlainTextString(content);
    }
    return '';
}