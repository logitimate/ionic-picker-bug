import { Component } from "@angular/core";
import { PickerController } from "@ionic/angular";
import { PickerColumnOption } from "@ionic/core/dist/types/components/picker/picker-interface";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  colors: Array<PickerColumnOption> = [
    { text: "Black", value: "Black" },
    { text: "Blue", value: "Blue" },
    { text: "Green", value: "Green" },
    { text: "Maroon", value: "Maroon" },
    { text: "Red", value: "Red" },
    { text: "Silver", value: "Silver" },
    { text: "Tan", value: "Tan" },
    { text: "Yellow", value: "Yellow" },
    { text: "White", value: "White" },
  ];

  selectedColor: string;

  constructor(private pickerController: PickerController) {}

  async openPicker() {
    const picker = await this.pickerController.create({
      columns: [
        {
          name: "Color",
          options: this.colors,
          selectedIndex: this.colors.findIndex(
            (opt) => opt.value === this.selectedColor
          ),
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Confirm",
          handler: (value) => {
            console.log(value);
            this.selectedColor = value.Color.value;
          },
        },
      ],
    });
    await picker.present();
  }
}
