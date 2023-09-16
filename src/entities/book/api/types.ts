import type { BookOrderValue, BookCategoryValue } from '../model';

export interface BookVolumeDto {
  items: BookItemDto[];
  kind: string;
  totalItems: number;
}

export interface BookItemDto {
  accessInfo?: {
    accessViewStatus?: string;
    country?: string;
    embeddable?: boolean;
    epub?: {
      isAvailable?: boolean;
    };
    pdf?: {
      isAvailable?: boolean;
    };
    publicDomain?: boolean;
    quoteSharingAllowed?: boolean;
    textToSpeechPermission?: string;
    viewability?: string;
    webReaderLink?: string;
  };
  etag: string;
  id: string;
  kind: string;
  saleInfo?: {
    country?: string;
    isEbook?: boolean;
    saleability?: string;
  };
  searchInfo?: {
    textSnippet?: string;
  };
  selfLink: string;
  volumeInfo: {
    allowAnonLogging?: boolean;
    authors: string[];
    canonicalVolumeLink?: string;
    categories?: string[];
    contentVersion?: string;
    description?: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    industryIdentifiers?: IndustryIdentifierDto[];
    infoLink?: string;
    language?: string;
    maturityRating?: string;
    pageCount?: number;
    panelizationSummary?: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    previewLink?: string;
    printType?: string;
    publishedDate?: string;
    publisher?: string;
    readingModes?: {
      image: boolean;
      text: boolean;
    };
    subtitle?: string;
    title: string;
  };
}

export interface IndustryIdentifierDto {
  identifier: string;
  type: string;
}

export interface BookRequestArgs {
  page: number;
  orderBy: BookOrderValue;
  q: string;
  subject: BookCategoryValue;
}
