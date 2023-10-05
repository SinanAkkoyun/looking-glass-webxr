export declare function createCSSVariables(): void;
export declare const containerRoot: {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    position: string;
    zIndex: string;
    paddingRight: string;
    paddingLeft: string;
    padding: string;
    width: string;
    height: string;
    maxWidth: string;
    whiteSpace: string;
    color: string;
    borderRadius: string;
    right: string;
    bottom: string;
    flex: string;
};
export declare const heading: {
    width: string;
    display: string;
    justifyContent: string;
    alignItems: string;
    textAlign: string;
    fontWeight: string;
    marginBottom: string;
};
export declare const heading6: {
    display: string;
    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
    alignItems: string;
    letterSpacing: string;
};
export declare const controlsContainer: {
    display: string;
    flexDirection: string;
    alignItems: string;
    padding: string;
    gap: string;
    paddingRight: string;
    paddingLeft: string;
};
export declare const sliderContainer: {
    order: number;
    flexGrow: number;
    width: string;
    height: string;
};
export declare const slider: {
    WebkitAppearence: string;
    appearance: string;
    height: string;
    borderRadius: string;
    cursor: string;
    width: string;
};
export declare const sliderThumb: {
    background: string;
    border: string;
    boxShadow: string;
    borderRadius: string;
};
export declare const sliderTrack: {
    background: string;
    backdropFilter: string;
    borderRadius: string;
};
export declare const horizontalFlexBoxStyle: {
    display: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    width: string;
};
export declare const button: {
    background: string;
    width: string;
    height: string;
    left: string;
    top: string;
    borderRadius: string;
    color: string;
    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
    outline: string;
    boxShadow: string;
};
export declare const tab_container: {
    display: string;
    flexDirection: string;
};
export declare const tab_active: {
    background: string;
    flexGrow: number;
    height: string;
    borderRadius: string;
    color: string;
    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
    outline: string;
    boxShadow: string;
};
export declare const tab_inactive: {
    background: string;
    height: string;
    flexGrow: number;
    borderRadius: string;
    color: string;
    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
    outline: string;
    boxShadow: string;
};
export declare const webXRButton: {
    cursor: string;
    left: string;
    width: string;
    background: string;
    borderRadius: string;
    position: string;
    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
    bottom: string;
    padding: string;
    color: string;
    textAlign: string;
    outline: string;
    zIndex: string;
};
/**
 *
 * set the style of an HTML or SVG Element with a javascript object, this only sets the style, and not other attributes.
 */
export declare function setStyle(element: HTMLElement | SVGElement, style: any): void;
export declare function castIcon(): SVGSVGElement;
export declare function FOVindicators(containerDiv: HTMLDivElement): string[];
export declare function DepthinessIndicators(containerDiv: HTMLDivElement): string[];
