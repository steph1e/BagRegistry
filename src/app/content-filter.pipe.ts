import { Pipe, PipeTransform} from '@angular/core';
import { MemberDataEntry } from './member-data-entry';

@Pipe ({name: 'contentFilter'})

export class ContentFilterPipe implements PipeTransform{
    transform(value: MemberDataEntry[], searchFor: string): MemberDataEntry[] {
        if(!searchFor) return value;
        searchFor = searchFor.toLowerCase();
        return value.filter( member => 
          member.name.toLowerCase().indexOf(searchFor) >= 0 ||
member.surname.toLowerCase().indexOf(searchFor) >= 0 ||
member.age.toString().indexOf(searchFor) >= 0 ||
member.address.toString().indexOf(searchFor) >= 0);
}
}
