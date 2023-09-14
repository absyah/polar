"""Add User.email_verified column

Revision ID: ea83384b81c7
Revises: acf4ea846f4d
Create Date: 2023-09-14 08:59:10.213025

"""
import sqlalchemy as sa
from alembic import op

# Polar Custom Imports
from polar.kit.extensions.sqlalchemy import PostgresUUID

# revision identifiers, used by Alembic.
revision = "ea83384b81c7"
down_revision = "acf4ea846f4d"
branch_labels: tuple[str] | None = None
depends_on: tuple[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("users", sa.Column("email_verified", sa.Boolean(), nullable=True))

    op.execute("UPDATE users SET email_verified = FALSE")

    op.alter_column(
        "users",
        "email_verified",
        existing_type=sa.Boolean(),
        existing_nullable=True,
        nullable=False,
    )

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("users", "email_verified")
    # ### end Alembic commands ###
