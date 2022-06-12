export interface Nav {
    label?: string;
    icon?: string;
    homeBtn?: boolean;
    command?: (event?: any) => void;
    leftItems?: NavItem[];
    rightItems?: NavItem[];
    style?: any;
    styleClass?: string;
    title?: string;
}

export interface NavItem{
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    labelVisible?: boolean;
    iconVisible?: boolean;
    aa_tracking_class?: string;
    aa_tracking_name?: string;
}


