import { CommandInteraction } from 'discord.js';
import { BaseTransformer } from './Base';

export class InteractionTransformer extends BaseTransformer<CommandInteraction> {
	protected override updateSafeValues() {
		this.safeValues.id = this.base.id;
		this.safeValues.applicationId = this.base.applicationId;
		this.safeValues.channelId = this.base.channelId;
		this.safeValues.guildId = this.base.guildId;
		this.safeValues.commandId = this.base.commandId;
		this.safeValues.locale = this.base.locale;
		this.safeValues.guildLocale = this.base.guildLocale;
	}
}
